# RUN ONLY ONCE PER MACHINE!!!

# Add rails-movie alias to .bashrc file
echo 'alias rails-app="docker exec -it rails-app bash"' >> $HOME/.bashrc

# Execute .bashrc to effectively add the aliases
source $HOME/.bashrc