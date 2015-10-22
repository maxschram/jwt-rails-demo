class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.text :body, null: false
      t.references :user, index: true
      t.boolean :done, null: false, default: false

      t.timestamps null: false
    end
  end
end
