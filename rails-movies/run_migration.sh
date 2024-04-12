#!/usr/bin/env sh
docker exec -it rails-app bash -c './bin/rails db:migrate; exit'
