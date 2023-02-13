# frozen_string_literal: true

class School < ApplicationRecord
  enum school_level: { middle_school: 1, college: 2, university: 3 }
  enum city: {
    "Macau" => 1,
    "Hong Kong" => 2,
    "Taiwan" => 3,
    "Oversea" => 4,
  }
end
