#!/usr/bin/zsh

RED='\033[0;31m'
NC='\033[0m' # No Color
GREEN='\033[0;32m'

addChallenge(){
    if [ -z "$1" ]; then
        echo "${RED}$❌ ERROR: No challenge name specified"
        return 1
    fi
    if [ -z "$2" ]; then
        echo "${RED}$❌ ERROR: No function name specified"
        return 1
    fi
    if [ -f "./src/challenges/$1.ts" ]; then
        echo "${RED}$❌ ERROR: Challenge $1 already exists"
        return 1
    fi
    cp ./src/challenges/template.ts "./src/challenges/$1.ts"
    echo "✅ Challenge $1 files created"
    cp ./src/tests/template.spec.ts "./src/tests/$1.spec.ts"
    echo "✅ Test $1 files created"
    sed -i "s/functionName/$2/g" "./src/challenges/$1.ts"
    sed -i "s/functionName/$2/g" "./src/tests/$1.spec.ts"
    sed -i "s/template/$1/g" "./src/tests/$1.spec.ts"
    echo "✅ Function name replaced"

    echo "${GREEN}\n➜ Created challenge $1 with function $2"
}

addChallenge "$1" "$2"
