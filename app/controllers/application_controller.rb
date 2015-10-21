class ApplicationController < ActionController::API

  def authenticate_request
    begin
      token = JWT.decode(request.headers['Authorization'], 
                         Rails.application.secrets.secret_key_base)
      payload = token[0]
      @current_user = User.find(id: payload['uid'])
    rescue JWT::DecodeError
      render json: 'authentication failed, invalid token', status: 401
    end
  end
end
