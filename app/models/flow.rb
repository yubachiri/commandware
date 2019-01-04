class Flow < ApplicationRecord
  belongs_to :user
  has_many :commands

  validates_presence_of :name
end
