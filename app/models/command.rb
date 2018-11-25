class Command < ApplicationRecord
  belongs_to :user, required: false
  belongs_to :flow, required: false

  validates_presence_of :name
  validates_presence_of :description
  validates_presence_of :command
  validate :relation_presence

  def relation_presence
    errors[:base] << "Relation can't be blank(System error)" unless self.user.present? || self.flow.present?
  end

end
