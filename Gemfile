# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.2'

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem 'rails', '~> 7.0.4'

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem 'sprockets-rails'

# Use postgresql as the database for Active Record
gem 'pg', '~> 1.1'

# Use the Puma web server [https://github.com/puma/puma]
gem 'puma', '~> 5.0'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem 'debug', platforms: %i[mri mingw x64_mingw]
end

group :development do
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end

gem 'vite_rails'

gem 'devise' # For user authentication

gem 'doorkeeper' # For oauth authentication

gem 'rubocop-shopify', '~> 2.8' # For code style checking

gem 'rubocop', '~> 1.31' # For code style checking

gem 'bullet', group: 'development' # For code debugging

gem 'grape-entity', '~> 0.10.1' # For API response formatting

gem 'kaminari', '~> 1.2' # For pagination

gem 'aasm', '~> 5.2' # For state machine

gem 'ransack' # For search

gem 'public_activity', '~> 2.0'
