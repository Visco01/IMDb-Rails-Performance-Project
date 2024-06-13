# Performance-Project

docker exec -it rails-app bash

./bin/rails db:migrate

## To access the container

Execute the file `access_rails_app.sh` or **preferred**:

1. Run the file `add_rails_movie_alias.sh`
2. Close all opened terminals (this is because the changes do not take places on already opened terminals)
3. Now you can just type `rails-app` on any terminal and access the container

# QUERIES
- [x] Cerca film per nome (con ratings e director)
- [x] Cerca film per regista
- [ ] Cerca film per genere
- [ ] Ordina per popolarità
- [ ] Ordina per ratings
- [ ] Cerca films per attore
- [ ] Filtra per adult
- [ ] Filtra per lunghezza

# TODO
- [ ] Implementare le query native CESCO
- [ ] Implementarle usando l'orm PIETRO
- [ ] Front-end GAB
