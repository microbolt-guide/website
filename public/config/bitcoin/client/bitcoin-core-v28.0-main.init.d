#!/sbin/openrc-run

: ${BITCOIND_CHAIN:=main}
: ${BITCOIND_CONFIGFILE:=/etc/bitcoind/${BITCOIND_CHAIN}.conf}
: ${BITCOIND_DATADIR:=/var/lib/bitcoind/${BITCOIND_CHAIN}}
: ${BITCOIND_LOGDIR:=/var/log/bitcoind/${BITCOIND_CHAIN}}
: ${BITCOIND_USER:=bitcoind}
: ${BITCOIND_GROUP:=bitcoind}
: ${BITCOIND_BIN:=/usr/bin/bitcoind}
: ${BITCOIND_OPTS=${BITCOIND_OPTS}}
: ${BITCOIND_SIGTERM_TIMEOUT:=600}

name="Bitcoin Core daemon (${BITCOIND_CHAIN})"
description="Bitcoin cryptocurrency P2P network daemon"

required_files="${BITCOIND_CONFIGFILE}"
piddir="/run/bitcoind"
pidfile="${piddir}/${BITCOIND_CHAIN}.pid"
authcookie="${piddir}/${BITCOIND_CHAIN}.authcookie"
retry="${BITCOIND_SIGTERM_TIMEOUT}"

command="${BITCOIND_BIN}"
command_args="-chain=${BITCOIND_CHAIN}
              -pid=${pidfile}
              -conf=${BITCOIND_CONFIGFILE}
              -datadir=${BITCOIND_DATADIR}
              -debuglogfile=${BITCOIND_LOGDIR}/debug.log
              ${BITCOIND_OPTS}"
command_args_background="-daemonwait"
command_user="${BITCOIND_USER}:${BITCOIND_GROUP}"

depend() {
    use net
    need localmount
    checkdepend onion tor
    checkdepend i2psam i2pd
    after logger firewall
}

checkdepend() {
    if grep -qs "^${1}=" "${BITCOIND_CONFIGFILE}"; then
        use "${2:-$1}"
    fi
}

start_pre() {
    mkdir -p "${BITCOIND_DATADIR}" "${BITCOIND_LOGDIR}"
    checkpath --file      --mode 0660 --owner "${command_user}" "${BITCOIND_CONFIGFILE}"
    checkpath --directory --mode 0750 --owner "${command_user}" "${BITCOIND_DATADIR}"
    checkpath --directory --mode 0755 --owner "${command_user}" "${BITCOIND_LOGDIR}"
    checkpath --directory --mode 0755 --owner "${command_user}" "${piddir}"
    checkconfig
}

start_post() {
    chmod -R u=rwX,g=rX,o= "${BITCOIND_DATADIR}" "${BITCOIND_LOGDIR}"
}

checkconfig() {
    if ! grep -qs '^rpcauth=' "${BITCOIND_CONFIGFILE}"
    then
        eerror ""
        eerror "ERROR: You must set a secure rpcauth to run bitcoind."
        eerror "The setting must appear in ${BITCOIND_CONFIGFILE}"
        eerror ""
        eerror "This auth is security critical to securing wallets "
        eerror "and must not be the same as the rpcuser setting."
        eerror ""
        eerror "It is recommended that you also set alertnotify so you are "
        eerror "notified of problems:"
        eerror ""
        eerror "ie: alertnotify=echo %%s | mail -s \"Bitcoin Alert\"" \
            "admin@foo.com"
        eerror ""
        return 1
    fi
}