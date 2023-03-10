# frozen_string_literal: true

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_14_060104) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channels", force: :cascade do |t|
    t.string("name", limit: 256, default: "", null: false)
    t.string("slug", limit: 256, default: "", null: false)
    t.text("description", default: "", null: false)
    t.string("topics", default: [], null: false, array: true)
    t.integer("posts_count", default: 0, null: false)
    t.integer("followers_count", default: 0, null: false)
    t.bigint("owner_id", null: false)
    t.datetime("created_at", null: false)
    t.datetime("updated_at", null: false)
    t.index(["owner_id"], name: "index_channels_on_owner_id")
    t.index(["slug"], name: "index_channels_on_slug", unique: true)
  end

  create_table "jwt_denylist", force: :cascade do |t|
    t.string("jti", null: false)
    t.datetime("exp", null: false)
    t.index(["jti"], name: "index_jwt_denylist_on_jti")
  end

  create_table "posts", force: :cascade do |t|
    t.string("title", limit: 256, default: "", null: false)
    t.text("body", default: "", null: false)
    t.integer("upvotes_count", default: 0, null: false)
    t.integer("likes_count", default: 0, null: false)
    t.integer("comments_count", default: 0, null: false)
    t.boolean("is_edited", default: false, null: false)
    t.bigint("owner_id", null: false)
    t.datetime("created_at", null: false)
    t.datetime("updated_at", null: false)
    t.bigint("channel_id", null: false)
    t.index(["owner_id"], name: "index_posts_on_owner_id")
  end

  create_table "schools", force: :cascade do |t|
    t.string("name", limit: 100, default: "", null: false)
    t.string("slug", limit: 100, default: "", null: false)
    t.string("address", limit: 256, default: "", null: false)
    t.string("city", limit: 100, default: "", null: false)
    t.integer("school_level", default: 0, null: false)
    t.datetime("created_at", null: false)
    t.datetime("updated_at", null: false)
    t.index(["slug"], name: "index_schools_on_slug", unique: true)
  end

  create_table "users", force: :cascade do |t|
    t.string("email", default: "", null: false)
    t.string("encrypted_password", default: "", null: false)
    t.string("reset_password_token")
    t.datetime("reset_password_sent_at")
    t.datetime("remember_created_at")
    t.string("confirmation_token")
    t.datetime("confirmed_at")
    t.datetime("confirmation_sent_at")
    t.string("unconfirmed_email")
    t.integer("failed_attempts", default: 0, null: false)
    t.string("unlock_token")
    t.datetime("locked_at")
    t.datetime("created_at", null: false)
    t.datetime("updated_at", null: false)
    t.string("first_name", limit: 100, default: "", null: false)
    t.string("last_name", limit: 100, default: "", null: false)
    t.string("username", limit: 100, default: "", null: false)
    t.bigint("school_id")
    t.index(["confirmation_token"], name: "index_users_on_confirmation_token", unique: true)
    t.index(["email"], name: "index_users_on_email", unique: true)
    t.index(["reset_password_token"], name: "index_users_on_reset_password_token", unique: true)
    t.index(["school_id"], name: "index_users_on_school_id")
    t.index(["unlock_token"], name: "index_users_on_unlock_token", unique: true)
  end

  add_foreign_key "channels", "users", column: "owner_id"
  add_foreign_key "posts", "channels"
  add_foreign_key "posts", "users", column: "owner_id"
  add_foreign_key "users", "schools"
end
