#!/sbin/openrc-run

: ${FULCRUM_CHAIN:=main}
: ${FULCRUM_CONFIGFILE:=/etc/fulcrum/${FULCRUM_CHAIN}.conf}
: ${FULCRUM_DATADIR:=/var/lib/fulcrum/${FULCRUM_CHAIN}}
: ${FULCRUM_LOGDIR:=/var/log/fulcrum/${FULCRUM_CHAIN}}
: ${FULCRUM_USER:=fulcrum}
: ${FULCRUM_GROUP:=fulcrum}
: ${FULCRUM_BIN:=/usr/bin/Fulcrum}
: ${FULCRUM_OPTS=${FULCRUM_OPTS}}
: ${FULCRUM_SIGTERM_TIMEOUT:=600}

required_files="${FULCRUM_CONFIGFILE}"
piddir="/run/fulcrum"
pidfile="${piddir}/${FULCRUM_CHAIN}.pid"
retry="${FULCRUM_SIGTERM_TIMEOUT}"

name="Fulcrum (${FULCRUM_CHAIN})"
description="A fast & nimble SPV Server"

command="${FULCRUM_BIN}"
command_args="${FULCRUM_CONFIGFILE}
              --datadir ${FULCRUM_DATADIR}
              --pidfile ${pidfile}
              ${FULCRUM_OPTS}"
command_user="${FULCRUM_USER}:${FULCRUM_GROUP}"
command_background="true"

start_stop_daemon_args="--stdout ${FULCRUM_LOGDIR}/debug.log
                        --stderr ${FULCRUM_LOGDIR}/debug.log"

depend() {
    use bitcoind.${FULCRUM_CHAIN}
    after bitcoind.${FULCRUM_CHAIN}
    provide electrum.${FULCRUM_CHAIN}
}

start_pre() {
    mkdir -p "${FULCRUM_DATADIR}" "${FULCRUM_LOGDIR}"
    [ -L "${FULCRUM_CONFIGFILE}" ] || \
    checkpath --file      --mode 0660 --owner "${command_user}" "${FULCRUM_CONFIGFILE}"
    checkpath --directory --mode 0750 --owner "${command_user}" "${FULCRUM_DATADIR}"
    checkpath --directory --mode 0755 --owner "${command_user}" "${FULCRUM_LOGDIR}"
    checkpath --directory --mode 0755 --owner "${command_user}" "${piddir}"
}

start_post() {
    checkpath --file --owner "${command_user}" "${pidfile}"
}