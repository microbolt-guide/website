ELECTRS_CHAIN=signet
ELECTRS_CONFIGFILE=/etc/electrs/signet.bbo.toml
ELECTRS_OPTS='--daemon-dir /var/lib/bitcoind/${ELECTRS_CHAIN}
              --cookie-file /run/bitcoind/${ELECTRS_CHAIN}.bbo.authcookie
              --electrum-rpc-addr 127.0.0.1:53011
              --daemon-rpc-addr 127.0.0.1:38332
              --daemon-p2p-addr 127.0.0.1:38333
              --signet-magic 7529730b'