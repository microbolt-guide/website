BITCOIND_OPTS='-rpccookieperms=group
               -rpccookiefile=${authcookie}
               -zmqpubhashblock=unix:${piddir}/${BITCOIND_CHAIN}.hash.block.sock
               -zmqpubrawblock=unix:${piddir}/${BITCOIND_CHAIN}.raw.block.sock
               -zmqpubrawtx=unix:${piddir}/${BITCOIND_CHAIN}.raw.tx.sock'