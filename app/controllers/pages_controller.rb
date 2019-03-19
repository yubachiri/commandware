class PagesController < ApplicationController
  def index
    @top_header = true unless user_signed_in?
    gon.flows = current_user.flows if user_signed_in?
  end
end
