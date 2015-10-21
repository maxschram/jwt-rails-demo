Rails.application.routes.draw do
  post 'login', to: 'tokens#create'
end
