class TokensController < ApplicationController
  def create
    user = User.find_by_credentials(params[:email], params[:password])
    if user
      render json: generate_token(user)
    else
      render json: {errors: { unauthorized: "Invalid credentials"}}, status: 401
    end
  end

  private

  def generate_token(user)
    JWT.encode({uid: user.id, exp: 24.hours.from_no.to_i},
               Rails.application.secrets.secret_key_base)
  end
end
