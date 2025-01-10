#!/sbin/openrc-run

: ${MEMPOOL_CHAIN:=main}
: ${MEMPOOL_CONFIG_TEMPLATE:=/etc/mempool/template.json}
: ${MEMPOOL_CONFIGFILE:=/etc/mempool/${MEMPOOL_CHAIN}.json}
: ${MEMPOOL_DATADIR:=/var/lib/mempool}
: ${MEMPOOL_LOGDIR:=/var/log/mempool/${MEMPOOL_CHAIN}}
: ${MEMPOOL_USER:=mempool}
: ${MEMPOOL_GROUP:=mempool}
: ${MEMPOOL_BIN:=/usr/bin/mempool}
: ${MEMPOOL_OPTS=${MEMPOOL_OPTS}}
: ${MEMPOOL_SIGTERM_TIMEOUT:=600}
: ${MEMPOOL_EXTRA_DEPENDS=${MEMPOOL_EXTRA_DEPENDS}}

case "${MEMPOOL_CHAIN}" in
    main)          MEMPOOL_NETWORK="mainnet" ;;
    test|testnet4) MEMPOOL_NETWORK="testnet" ;;
    *)             MEMPOOL_NETWORK="${MEMPOOL_CHAIN}" ;;
esac

name="Mempool Space (${MEMPOOL_CHAIN})"
description="A self-hosted Bitcoin blockchain and mempool visualizer/explorer"

directory="${MEMPOOL_DATADIR}"
#required_files="${MEMPOOL_CONFIGFILE}"
piddir="/run/mempool"
pidfile="${piddir}/${MEMPOOL_CHAIN}.pid"
retry="${MEMPOOL_SIGTERM_TIMEOUT}"

command="${MEMPOOL_BIN}"
command_args="${MEMPOOL_OPTS}"
command_user="${MEMPOOL_USER}:${MEMPOOL_GROUP}"
command_background="true"

start_stop_daemon_args="--env MEMPOOL_CONFIG_FILE=${MEMPOOL_CONFIGFILE}
                        --env MEMPOOL_CHAIN=${MEMPOOL_CHAIN}
                        --env MEMPOOL_NETWORK=${MEMPOOL_NETWORK}
                        --env MEMPOOL_DATADIR=${MEMPOOL_DATADIR}
                        --stdout ${MEMPOOL_LOGDIR}/debug.log
                        --stderr ${MEMPOOL_LOGDIR}/debug.log"

depend() {
    need "bitcoind.${MEMPOOL_CHAIN}" "electrum.${MEMPOOL_CHAIN}" mariadb "${MEMPOOL_EXTRA_DEPENDS}"
}

start_pre() {
    mkdir -p "${MEMPOOL_LOGDIR}"
    cat "${MEMPOOL_CONFIG_TEMPLATE}" > "${MEMPOOL_CONFIGFILE}"
    checkpath --directory --mode 0755 --owner "${command_user}" "${MEMPOOL_CONFIGFILE%/*}"
    checkpath --file      --mode 0660 --owner "${command_user}" "${MEMPOOL_CONFIGFILE}"
    checkpath --directory --mode 0750 --owner "${command_user}" "${MEMPOOL_DATADIR}"
    checkpath --directory --mode 0755 --owner "${command_user}" "${MEMPOOL_LOGDIR}"
    checkpath --directory --mode 0755 --owner "${command_user}" "${piddir}"
}

stop() {
    ebegin "Stopping ${SVCNAME}"
    pkill -TERM -P "$(cat ${pidfile})" > /dev/null 2>&1
    start-stop-daemon \
        --stop \
        --pidfile="${pidfile}" \
        --retry="${MEMPOOL_SIGTERM_TIMEOUT}" \
        --exec="${MEMPOOL_BIN}"
    eend $?
}