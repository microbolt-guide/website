#!/bin/sh
set -e

# rename ./pages/*/index.mdx to ./pages/*/index.mdx.html or vice versa
# if argument is .mdx, the script will rename .mdx to .mdx.html
# if no argument is passed, the script will rename .mdx.html to .mdx
process_file() {
    find ./pages/* \
        -maxdepth 1 \
        -name "index${1:-.mdx.html}" \
        -exec sh \
            -c 'mv "$1" "${1%.html}${2}"' _ {} "${1:+.html}" \;
}

trap process_file INT EXIT

case "$1" in
    push)
        process_file .mdx
        crowdin "$1"              --identity ./.crowdin.yml
        crowdin "$1" translations --identity ./.crowdin.yml
    ;;
    pull)
        crowdin "$1" sources      --identity ./.crowdin.yml
        crowdin "$1"              --identity ./.crowdin.yml
    ;;
    *)
        printf "%s\n" "Usage: ${0##*/} {push|pull}"
        trap - INT EXIT; exit 1
    ;;
esac