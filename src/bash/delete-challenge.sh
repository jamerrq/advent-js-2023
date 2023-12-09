#!/usr/bin/zsh

RED='\033[0;31m'
NC='\033[0m' # No Color
GREEN='\033[0;32m'

removeChallenge(){
    if [ -z "$1" ]; then
        echo "${RED}❌ ERROR: No challenge name specified"
        return 1
    fi
    if [ ! -f "./src/challenges/$1.ts" ]; then
        echo "${RED}❌ ERROR: Challenge $1 does not exist"
        return 1
    fi
    rm "./src/challenges/$1.ts"
    echo "✅ Challenge $1 files removed"
    rm "./src/tests/$1.spec.ts"
    echo "✅ Test $1 files removed"

    echo "${GREEN}\n➜ Removed challenge $1"
}

removeChallenge "$1"
