# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

if Rails.env.development?
  user = if User.count.blank?
    User.create(
      email: "demo@onlyteen.app",
      password: "password",
      password_confirmation: "password",
    )
  else
    User.find_by(email: "demo@onlyteen.app")
  end

  # Channel.find_or_create_by(
  #   owner: user,
  #   slug: "demo",
  #   name: "DEMO Channel",
  # )

  if School.count.blank?
    School.create(
      name: "Demo School",
      slug: "demo-school",
      address: "123 Demo Street",
      city: "Demo City",
      school_level: "middle_school",
    )
  end
end
