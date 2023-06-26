# require 'action_dispatch/proxy'

Rails.application.routes.draw do

  scope :api do

    post "/signup", to: "users#create"

    post "/login", to: "sessions#create"
  
    get "/me", to: "users#show"
  
    delete "/logout", to: "sessions#destroy"

    resources :wordstars
    resources :categories
    resources :expressions
    resources :words
    resources :users

  end

  #   # Routing logic: fallback requests for React Router.
  #   # Leave this here to help deploy your app later!
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
