class TodosController < ApplicationController
  before_action :authenticate_request
  def index
    render json: @current_user.todos
  end
end
