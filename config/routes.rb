Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :new, :destroy]
    resources :tracks do
      resources :annotations, only: [:index]
    end
    resources :annotations, except: [:index] do
      resources :comments, only: [:index]
    end
    resources :comments, except: [:index]
  end

  root "static_pages#root"
end
