#!/usr/bin/zsh

RED='\033[0;31m'
NC='\033[0m' # No Color
GREEN='\033[0;32m'

addChallenge(){
    # First parameter is the challenge number (from 01 to 25)
    if [ -z "$1" ]; then
        echo "${RED}❌ ERROR: No challenge number specified"
        return 1
    fi
    # Second parameter is the function name
    if [ -z "$2" ]; then
        echo "${RED}❌ ERROR: No function name specified"
        return 1
    fi
    # Check if challenge already exists
    if [ -f "./src/challenges/$1.ts" ]; then
        echo "${RED}❌ ERROR: Challenge $1 already exists. Remove it first"
        return 1
    fi
    # Check if test already exists
    if [ -f "./src/tests/$1.spec.ts" ]; then
        echo "${RED}❌ ERROR: Test $1 already exists. Remove it first"
        return 1
    fi
    # Create challenge and test files
    cp ./src/challenges/template.ts "./src/challenges/$1.ts"
    echo "✅ Challenge $1 files created"
    cp ./src/tests/template.spec.ts "./src/tests/$1.spec.ts"
    echo "✅ Test $1 files created"
    # Replace template with challenge number and function name
    sed -i "s/functionName/$2/g" "./src/challenges/$1.ts"
    sed -i "s/functionName/$2/g" "./src/tests/$1.spec.ts"
    sed -i "s/template/$1/g" "./src/tests/$1.spec.ts"
    sed -i "s/Test Template/#$1/g" "./src/tests/$1.spec.ts"
    echo "✅ Function name replaced"

    # Third parameter is optional and is the params for the function along
    # with the return type e.g. (a: number, b: number): number
    if [ -n "$3" ]; then
        sed -i "s/params/$3/g" "./src/challenges/$1.ts"
        echo "✅ Function params replaced"
    fi

    echo "${GREEN}\n➜ Created challenge $1 with function $2"
}

addChallenge "$1" "$2"
