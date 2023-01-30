# frozen_string_literal: true

module Api
  class BaseController < ActionController::API
    include ActionController::MimeResponds
    protect_from_forgery with: :null_session
    before_action :authenticate_user!
  end
end
