# frozen_string_literal: true

class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table(:posts, id: :bigint) do |t|
      t.string(:title, null: false, default: "", limit: 256)
      t.text(:body, null: false, default: "")
      t.integer(:upvotes_count, null: false, default: 0)
      t.integer(:likes_count, null: false, default: 0)
      t.integer(:comments_count, null: false, default: 0)
      t.boolean(:is_edited, null: false, default: false)
      t.references(:owner, foreign_key: { to_table: :users }, null: false)
      t.timestamps
    end
    execute("ALTER SEQUENCE posts_id_seq RESTART WITH 10000")
  end
end
