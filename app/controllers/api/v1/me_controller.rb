# frozen_string_literal: true

module Api
  module V1
    class MeController < ApplicationController
      ## get /api/v1/me/channels
      ## get /api/v1/me/channels.json
      def channels
        render_success(current_user.channels)
      end
    end
  end
end
