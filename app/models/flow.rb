class Flow < ApplicationRecord
  belongs_to :user
  has_many :commands
end
