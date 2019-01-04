class PagesController < ApplicationController
  def index
    gon.flows = current_user.flows if user_signed_in?
  end
end
