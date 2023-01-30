# frozen_string_literal: true

class CreateChannels < ActiveRecord::Migration[7.0]
  def change
    create_table(:channels, id: :bigint) do |t|
      t.string(:name, null: false, default: "", limit: 256)
      t.string(:slug, null: false, default: "", limit: 256, index: { unique: true })
      t.text(:description, null: false, default: "")
      t.string(:topics, array: true, null: false, default: [])
      t.integer(:posts_count, null: false, default: 0)
      t.integer(:followers_count, null: false, default: 0)
      t.references(:owner, foreign_key: { to_table: :users }, null: false)
      t.timestamps
    end
    add_column(:posts, :channel_id, :bigint, null: false)
    add_foreign_key(:posts, :channels)
    execute("ALTER SEQUENCE channels_id_seq RESTART WITH 10000")
  end
end
