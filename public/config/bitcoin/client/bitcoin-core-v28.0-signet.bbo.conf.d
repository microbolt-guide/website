BITCOIND_CHAIN=signet
BITCOIND_CONFIGFILE=/etc/bitcoind/signet.bbo.conf
BITCOIND_OPTS='-rpccookieperms=group
               -rpccookiefile=${piddir}/${BITCOIND_CHAIN}.bbo.authcookie"
               -zmqpubhashblock=unix:${piddir}/${BITCOIND_CHAIN}.bbo.hash.block.sock
               -zmqpubrawblock=unix:${piddir}/${BITCOIND_CHAIN}.bbo.raw.block.sock
               -zmqpubrawtx=unix:${piddir}/${BITCOIND_CHAIN}.bbo.raw.tx.sock
               -addnode=89.147.108.149:38333
               -signetchallenge=00144b4ef981ad360b21e2a758954e5152d8390e6598'