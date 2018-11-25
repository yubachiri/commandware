Rails.application.routes.draw do
  root 'pages#index'

  devise_for :users

  authenticated :user do
    resources :flows do
      resources :commands
    end
  end

end
