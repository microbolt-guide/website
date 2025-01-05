#!/sbin/openrc-run

: ${ELECTRS_CHAIN:=main}
: ${ELECTRS_CONFIGFILE:=/etc/electrs/${ELECTRS_CHAIN}.toml}
: ${ELECTRS_DATADIR:=/var/lib/electrs/${ELECTRS_CHAIN}}
: ${ELECTRS_LOGDIR:=/var/log/electrs/${ELECTRS_CHAIN}}
: ${ELECTRS_USER:=electrs}
: ${ELECTRS_GROUP:=electrs}
: ${ELECTRS_BIN:=/usr/bin/electrs}
: ${ELECTRS_OPTS=${ELECTRS_OPTS}}
: ${ELECTRS_SIGTERM_TIMEOUT:=600}

network() {
    case "${ELECTRS_CHAIN}" in
        main) printf "bitcoin" ;;
        test) printf "testnet" ;;
        *)    printf "%s" "${ELECTRS_CHAIN}" ;;
    esac
}

required_files="${ELECTRS_CONFIGFILE}"
piddir="/run/electrs"
pidfile="${piddir}/${ELECTRS_CHAIN}.pid"
retry="${ELECTRS_SIGTERM_TIMEOUT}"

name="Electrs (${ELECTRS_CHAIN})"
description="Efficient re-implementation of Electrum Server in Rust"

command="${ELECTRS_BIN}"
command_args="--conf ${ELECTRS_CONFIGFILE}
              --skip-default-conf-files
              --db-dir ${ELECTRS_DATADIR}
              --network $(network)
              --skip-block-download-wait
              ${ELECTRS_OPTS}"
command_user="${ELECTRS_USER}:${ELECTRS_GROUP}"
command_background="true"

start_stop_daemon_args="--stdout ${ELECTRS_LOGDIR}/debug.log
                        --stderr ${ELECTRS_LOGDIR}/debug.log"

depend() {
    use bitcoind.${ELECTRS_CHAIN}
    after bitcoind.${ELECTRS_CHAIN}
    provide electrum.${ELECTRS_CHAIN}
}

start_pre() {
    mkdir -p "${ELECTRS_DATADIR}" "${ELECTRS_LOGDIR}"
    [ -L "${ELECTRS_CONFIGFILE}" ] || \
    checkpath --file      --mode 0660 --owner "${command_user}" "${ELECTRS_CONFIGFILE}"
    checkpath --directory --mode 0750 --owner "${command_user}" "${ELECTRS_DATADIR}"
    checkpath --directory --mode 0755 --owner "${command_user}" "${ELECTRS_LOGDIR}"
    checkpath --directory --mode 0755 --owner "${command_user}" "${piddir}"
}

start_post() {
    checkpath --file --owner "${command_user}" "${pidfile}"
}