# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  include RenderHelper

  def configure_permitted_parameters
    #   devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :email])
  end
end
