Rails.application.routes.draw do
  root 'static_pages#root'
  post 'login', to: 'tokens#create', defaults: { format: :json }
  resources :todos, only: [:index], defaults: { format: :json }
end
