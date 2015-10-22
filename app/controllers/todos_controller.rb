class TodosController < ApplicationController
  before_action :authenticate_request
  def index
    render json: @current_user.todos
  end

  def create
    todo = @current_user.todos.new(todo_params)
    if todo.save
      render json: todo
    else
      render json: todo.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:body)
  end
end
