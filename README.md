# Performance-Project

docker exec -it rails-app bash

./bin/rails db:migrate

## To access the container

Execute the file `access_rails_app.sh` or **preferred**:

1. Run the file `add_rails_movie_alias.sh`
2. Close all opened terminals (this is because the changes do not take places on already opened terminals)
3. Now you can just type `rails-app` on any terminal and access the container

# QUERIES
1. Cerca film per nome (con ratings e director)
2. Cerca film per regista
3. Cerca film per genere
4. Ordina per popolarità
5. Ordina per ratings
6. Cerca films per attore
7. Filtra per adult
8. Filtra per lunghezza

# TODO
1. Implementare le query native CESCO
2. Implementarle usando l'orm PIETRO
3. Front-end GAB
