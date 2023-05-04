Rails.application.routes.draw do


  namespace :api do

  resources :wordstars
  resources :categories
  resources :expressions
  resources :words
  resources :users
  
  post "/signup", to: "users#create"

  post "/login", to: "sessions#create"
 
  get "/me", to: "users#show"
 
  delete "/logout", to: "sessions#destroy"

end
#   # Routing logic: fallback requests for React Router.
#   # Leave this here to help deploy your app later!
get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
# get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && (req.format.html? || req.content_type.include?('application/x-www-form-urlencoded') || req.content_type.include?('multipart/form-data')) }

end
