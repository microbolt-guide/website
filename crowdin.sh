#!/bin/sh
set -e

case "$1" in
    push)
        cp ./pages/en/index.mdx ./index.mdx.bk
        mv ./pages/en/index.mdx ./pages/en/index.mdx.html

        if crowdin upload sources --identity ./.crowdin.yml && crowdin upload translations --identity ./.crowdin.yml; then
            mv ./index.mdx.bk ./pages/en/index.mdx
        else
            mv ./index.mdx.bk ./pages/en/index.mdx
            echo "Upload failed, restored the backup."
            exit 1
        fi
    ;;
    pull)
        if crowdin download --identity ./.crowdin.yml; then
            find ./pages -name "index.mdx.html" | while read -r file; do
                mv "$file" "${file%.html}"
            done
        else
            echo "Download failed."
            exit 1
        fi
    ;;
    *)
        echo "Usage: $0 {push|pull}"
        exit 1
    ;;
esac