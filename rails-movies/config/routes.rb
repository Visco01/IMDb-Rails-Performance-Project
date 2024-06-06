Rails.application.routes.draw do
  get 'directors', to: 'directors#index'
  get 'actors', to: 'actors#index'
  resources :attrs
  resources :title_crews
  resources :title_principals
  resources :title_episodes
  resources :professions
  resources :name_basics
  resources :types
  resources :title_akas
  resources :genres
  resources :title_ratings
  resources :title_basics
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
