# frozen_string_literal: true

# RenderHelper
module RenderHelper
  extend ActiveSupport::Concern

  included do
    helper_method :render_success
    helper_method :render_errors
    helper_method :render_json
  end

  def render_success(data)
    render_json(data)
  end

  def render_errors(errors, status = :unprocessable_entity)
    render_json(
      {
        errors:,
        status:,
      },
      status,
    )
  end

  def render_json(json, status = :ok)
    render(json:, status:)
  end
end
