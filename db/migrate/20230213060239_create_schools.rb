# frozen_string_literal: true

class CreateSchools < ActiveRecord::Migration[7.0]
  def change
    create_table(:schools, id: :bigint) do |t|
      t.string(:name, null: false, default: "", limit: 100)
      t.string(:slug, null: false, default: "", limit: 100, index: { unique: true })
      t.string(:address, null: false, default: "", limit: 256)
      t.integer(:city, null: false, default: 0)
      t.integer(:school_level, null: false, default: 0)
      t.timestamps
    end
    execute("ALTER SEQUENCE schools_id_seq RESTART WITH 10000")
    add_index(:schools, :city)
  end
end
