Rails.application.routes.draw do
  root to: 'pages#home'

  resources :project, only: [:index]
  resources :contact, only: [:index]
end
