Rails.application.routes.draw do
  resources :word_joins_expressions
  resources :stars
  resources :words
  resources :expressions
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

 post "/signup", to: "users#create"

 post "/login", to: "session#create"

 get "/me", to: "users#show"

 delete "/logout", to: "session#destroy"


end
