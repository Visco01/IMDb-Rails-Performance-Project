#!/usr/bin/env sh
if [ -z "$1" ]; then
    echo "Please provide an action: migrate or rollback"
    exit 1
fi

ACTION="$1"

docker exec -it rails-app bash -c "./bin/rails db:${ACTION}; exit"
