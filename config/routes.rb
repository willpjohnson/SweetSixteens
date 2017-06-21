Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :new, :destroy]
    resources :tracks
  end

  root "static_pages#root"
end
