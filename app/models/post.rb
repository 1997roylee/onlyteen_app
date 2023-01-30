# frozen_string_literal: true

class Post < ApplicationRecord
  belongs_to :channel
  belongs_to :owner, class_name: "User", foreign_key: "owner_id"
end
