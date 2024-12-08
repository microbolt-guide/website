---
title: Introducció
---

# Microbolt

![](/images/microbolt-banner.webp)

Construeix el teu propi node complet de Bitcoin "fes-ho tot tu mateix" que et
convertirà en un parell sobirà a la xarxa de Bitcoin i Lightning.

No cal confiar en ningú més.

## Què és el Microbolt?

Microbolt és més que una bifurcació de [RaspiBolt](https://raspibolt.org) i 
[MiniBolt](https://minibolt.info), feta per a tota mena d'ordinadors, no només
Raspberry Pi's.

Amb aquesta guia, pots configurar un node de Bitcoin i Lightning des de zero,
fent-ho tot tu mateix. Aprendràs sobre Linux, Bitcoin i Lightning. Com a
resultat, tindreu el vostre propi node Microbolt, construït per tu i per ningú
més.

Hi ha moltes raons per les quals hauries d'executar el teu propi node de
Bitcoin.

* **Mantingueu Bitcoin descentralitzat.** Utilitzeu el vostre node per ajudar a
fer complir les vostres regles de consens de Bitcoin.
* **Recupera la teva sobirania.** Deixa que el teu node validi les teves pròpies
transaccions de Bitcoin. No cal demanar a algú més que us expliqui què està
passant a la xarxa Bitcoin.
* **Millora la teva privadesa.** Connecta les teves carteres al teu node perquè
ja no hagis de revelar tot el seu historial financer a servidors externs.
* **Forma part de Lightning.** Executeu el vostre propi node Lightning per als
pagaments diaris i ajudeu a crear una xarxa Bitcoin Lightning robusta i
descentralitzada.

Hem esmentat que també és divertit?

## Visió general de Microbolt

Aquesta guia explica com configurar el vostre propi node Bitcoin en un
ordinador. Però funciona a la majoria de plataformes de maquinari perquè només
utilitza ordres estàndard de Alpine Linux.

### Característiques

El vostre node Bitcoin oferirà la següent funcionalitat:

🟠 **Bitcoin**: participació directa i sense confiança a la xarxa peer-to-peer
de Bitcoin, validació completa de blocs i transaccions

⚛️ **Servidor Electrum**: connecteu les vostres carteres compatibles (incloses
les carteres de maquinari) al vostre propi node

⛓️ **Explorador de cadena de blocs**: explorador web per cercar de manera
privada transaccions, blocs i molt més

⚡ **Lightning**: client complet amb canals estables a llarg termini i
interfícies de gestió web i mòbil

🪽 **Nostr**: xarxes socials globals, descentralitzades i resistents a la
censura

🔋 **Sempre actiu**: els serveis es sincronitzen constantment i estan
disponibles les 24 hores del dia

🧅 **Arribable des de qualsevol lloc**: connecteu-vos a tots els vostres serveis
a través de la xarxa Tor

### Públic objectiu

Ens esforcem per donar instruccions infal·libles. Però l'objectiu també és
fer-ho tot nosaltres mateixos. No es permeten les dreceres que impliquin confiar
en una altra persona. Això fa que aquesta guia sigui força tècnica, però
intentem que sigui el més senzill possible. Aconseguiràs una comprensió bàsica
del com i el perquè.

Si voleu aprendre sobre Linux, Bitcoin i Lightning, aquesta guia és per tu.

### Estructura

El nostre objectiu és mantenir el nucli d'aquesta guia ben mantingut i
actualitzat:

1. [Sistema](./docs/system.md): prepareu el maquinari i configureu el sistema
operatiu
1. [Bitcoin](./docs/bitcoin.md): sincronitza el vostre propi node complet de
Bitcoin, el servidor Electrum i l'explorador de cadena de blocs
1. [Lightning](./docs/lightning.md): executeu el vostre propi client Lightning
amb la gestió de nodes web
1. [Nostr](./docs/nostr.md): utilitzeu xarxes socials descentralitzades i
resistents a la censura

## Comunitat

Aquest NO és un projecte comunitari. `doitwithnotepad` te l'última paraula en
disputes o discussions dins de la comunitat.

Trobeu ajuda i altres usuaris de Microbolt a les plataformes següents:

* [Problemes de Github](https://github.com/microbolt-guide/microbolt/issues)
* Grup de Telegram: [t.me/microbolt_official](https://t.me/microbolt_official)

I no dubteu a unir-vos a altres col·laboradors si veieu alguna cosa que es pot
millorar!