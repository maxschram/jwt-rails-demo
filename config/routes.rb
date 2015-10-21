Rails.application.routes.draw do
  post 'login', to: 'tokens#create'
  resources :todos, only: [:index], defaults: { format: :json }
end
