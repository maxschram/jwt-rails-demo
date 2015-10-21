Rails.application.routes.draw do
  post 'login', 'tokens#create'
end
