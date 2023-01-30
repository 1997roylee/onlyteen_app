# frozen_string_literal: true

module Users
  class RegistrationsController < Devise::RegistrationsController
    respond_to :json

    private

    def respond_with(resource, _opts = {})
      resource.persisted? ? register_success(resource) : register_failed(resource)
    end

    def register_success(resource)
      render_success({
        message: "Signed up.",
        resource: resource,
      })
    end

    def register_failed(resource)
      render_errors(resource.errors)
    end

    # def sign_up_params
    #   params.permit(:email, :password)
    # end
  end
end
