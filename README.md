# Performance-Project

docker exec -it rails-app bash

./bin/rails db:migrate

## To access the container

Execute the file `access_rails_app.sh` or **preferred**:

1. Run the file `add_rails_movie_alias.sh`
2. Close all opened terminals (this is because the changes do not take places on already opened terminals)
3. Now you can just type `rails-app` on any terminal and access the container

# TODO:

-   aggiungere 'not null'
-   fare relazioni su orm
-   rivedere task download
-   inserire dati nel DB

Suddivisione tasks per tabelle

GABRiel:

-   title_akas
-   title_basics

PIETRO:

-   title_crews
-   title_episodes

FORCELLA

-   title_principals
-   title_ratings
-   name_basics
