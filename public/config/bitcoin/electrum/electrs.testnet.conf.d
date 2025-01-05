ELECTRS_CHAIN=test
ELECTRS_OPTS='--daemon-dir /var/lib/bitcoind/${ELECTRS_CHAIN}
              --cookie-file /run/bitcoind/${ELECTRS_CHAIN}.authcookie
              --electrum-rpc-addr 127.0.0.1:51011
              --daemon-rpc-addr 127.0.0.1:18332
              --daemon-p2p-addr 127.0.0.1:18333'