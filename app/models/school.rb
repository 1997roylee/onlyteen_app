# frozen_string_literal: true

class School < ApplicationRecord
  enum school_level: { middle_school: 1, college: 2, university: 3 }
end
