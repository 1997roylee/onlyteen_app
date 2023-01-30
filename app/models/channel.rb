# frozen_string_literal: true

class Channel < ApplicationRecord
  belongs_to :owner, class_name: "User", foreign_key: "owner_id"
  has_many :posts, dependent: :destroy
  # has_many :follows, dependent: :destroy
end
