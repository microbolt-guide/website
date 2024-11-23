#!/bin/sh
#
# microbolt "aliases" script
#
# The MIT License (MIT)
#
# Copyright (c) 2024 doitwithnotepad
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

VERSION="0.1.0"

ALIASES="
update
upgrade
add
del
start
stop
status
restart
log
listen
publicip
scb
unlock
newaddress
listchaintxns
listpayments
listinvoices
getinfo
walletbalance
listpeers
listchannels
channelbalance
pendingchannels
openchannel
connect
payinvoice
addinvoice
addinvoiceamp
wtclient
wtserver
"

usage() {
    cat << EOF
usage: ${0##*/} [options ...]
       -c, --create                             create the system aliases
       -r, --remove                             remove the system aliases
       -v, --version                            print the version
       -h, --help                               show this help

system aliases usage: <alias> [service ...] [runlevel ...] [options ...]
    possible service: tor, i2pd, bitcoind, electrs, fulcrum, btc-rpc-explorer,
        lnd, thunderhub, scb-backup
    possible runlevel: default, boot, sysinit, shutdown
        DEFAULT: default

       update                                   update the system
       upgrade                                  upgrade the system
       add              <service>  <runlevel>   add a service to a runlevel
       del              <service>  <runlevel>   remove a service from a runlevel
       start            <service>               start a service
       stop             <service>               stop a service
       status           <service>               show the status of a service
       restart          <service>               restart a service
       log              <service>               show the log of a service

lightning aliases usage: <alias> [network ...] [address ...] [options ...]
    possible network: mainnet, testnet, regtest, simnet
        DEFAULT: mainnet
    possible address: np2wkh, p2wkh, p2tr, ...
        DEFAULT: p2tr

       scb              <network>               create a channel backup for LND
       unlock           <network>               unlock the wallet
       newaddress       <network>  <address>    generate a new address
       listchaintxns    <network>               list chain transactions
       listpayments     <network>               list payments
       listinvoices     <network>               list invoices
       getinfo          <network>               get information
       walletbalance    <network>               wallet balance
       listpeers        <network>               list peers
       listchannels     <network>               list channels
       channelbalance   <network>               channel balance
       pendingchannels  <network>               pending channels
       openchannel      <network>               open a channel
       connect          <network>               connect to a peer
       payinvoice       <network>               pay an invoice
       addinvoice       <network>               add an invoice
       addinvoiceamp    <network>               add an invoice with AMP
       wtclient         <network>               watchtower client info
       wtserver         <network>               watchtower server info
EOF
}

lightning() {
    lncli --network "${2:-mainnet}" "$1" "$@"
}

listen() {
    # shellcheck disable=SC2015
    [ $# -eq 0 ] && {
        "$SU" netstat -lntup | grep LISTEN
    } || {
        "$SU" netstat -lntup | grep LISTEN | grep "$1"
    }
}

create() {
    (
        # shellcheck disable=SC2164
        cd "$(dirname "$0")"
        printf "%s" "Creating symbolic links..."
        for alias in $ALIASES; do
            [ ! -h "$alias" ] && ln -s "${0##*/}" "$alias"
        done
        printf "\r\033[K%s\n" "Creating symbolic links... completed"
    )
}

remove() {
    (
        # shellcheck disable=SC2164
        cd "$(dirname "$0")"
        printf "%s" "Removing symbolic links..."
        for alias in $ALIASES; do
            [ -h "$alias" ] && rm "$alias"
        done
        printf "\r\033[K%s\n" "Removing symbolic links... completed"
    )
}

# int main()
{
    case "${0##*/}" in
        microbolt)
            case "$1" in
                -c|--create)  create ;;
                -r|--remove)  remove ;;
                -v|--version) printf "%s\n" "Microbolt v$VERSION"; exit 1 ;;
                -h|--help)    usage; exit 0 ;;
                *)            printf "invalid option: %s\n\n" "$1"
                              usage; exit 1 ;;
            esac
        ;;
        update|upgrade)            "$SU" apk "$0" ;;
        add|del)                   "$SU" rc-update  "$0" "$1" "${2:-default}" ;;
        start|stop|status|restart) "$SU" rc-service "$1" "$0" ;;
        log)
            case "$1" in
                tor)               "$SU" tail -f /var/log/tor/notices.log ;;
                i2pd)              "$SU" tail -f /var/log/i2pd/i2pd.log ;;
                bitcoind|\
                electrs|\
                fulcrum|\
                btc-rpc-explorer|\
                public-pool|\
                thunderhub)
                                   tail -f "/var/log/$1/debug.log" ;;
                lnd)               tail -f /var/log/lnd/**/**/lnd.log ;;
                scbb)              tail -f /var/log/messages | grep scbb ;;
                *)                 printf "invalid option: %s\n\n" "$1"
                                   usage; exit 1 ;;
            esac
        ;;
        listen)                    listen "$@" ;;
        publicip)                  printf "%s%s\n" \
                                       "Your public real IP is: " \
                                       "$(wget -qO- icanhazip.com)" ;;
        scb) 
            "$SU" touch \
                "/var/lib/lnd/data/chain/bitcoin/${1:-mainnet}/channel.backup"
        ;;
        unlock|listchaintxns|listpayments|listinvoices|getinfo|walletbalance|\
        listpeers|listchannels|channelbalance|pendingchannels|openchannel|\
        connect|payinvoice|addinvoice)
                       lightning "$0" "$1" ;;
        newaddress)    lightning "$0" "$1" "${2:-p2tr}" ;;
        addinvoiceamp) lightning "$0 --amp" "$1" ;;
        wtclient)      lightning "$0 towers" "$1" ;;
        wtserver)      lightning "tower info" "$1" ;;
    esac
}