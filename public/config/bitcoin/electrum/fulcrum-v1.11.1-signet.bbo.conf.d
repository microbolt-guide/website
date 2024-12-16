FULCRUM_CHAIN=signet
FULCRUM_CONFIGFILE=/etc/fulcrum/signet.bbo.conf
FULCRUM_OPTS='--tcp 127.0.0.1:53001
              --admin 127.0.0.1:8300
              --bitcoind 127.0.0.1:38332
              --rpccookie /run/bitcoind/${FULCRUM_CHAIN}.bbo.authcookie'