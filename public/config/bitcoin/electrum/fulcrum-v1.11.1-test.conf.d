FULCRUM_CHAIN=test
FULCRUM_OPTS='--tcp 127.0.0.1:51001
              --admin 127.0.0.1:8100
              --bitcoind 127.0.0.1:18332
              --rpccookie /run/bitcoind/${FULCRUM_CHAIN}.authcookie'