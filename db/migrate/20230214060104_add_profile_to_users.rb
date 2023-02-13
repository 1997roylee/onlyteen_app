# frozen_string_literal: true

class AddProfileToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column(:users, :first_name, :string, default: "", null: false, limit: 100)
    add_column(:users, :last_name, :string, default: "", null: false, limit: 100)
    add_column(:users, :username, :string, default: "", null: false, limit: 100)
    # add_column :users, :bio, :text, default: "", null: false
    add_reference(:users, :school, foreign_key: true, type: :bigint)
  end
end
