class TokensController < ApplicationController
  def create
    user = User.find_by_credentials(params[:email], params[:password])
    if user
      render json: { token: generate_token(user) }, status: :accepted
    else
      render json: {errors: { unauthorized: "Invalid credentials"}}, status: 401
    end
  end

  private

  def generate_token(user)
    JWT.encode({uid: user.id, exp: 24.hours.from_now.to_i},
               Rails.application.secrets.secret_key_base)
  end
end
