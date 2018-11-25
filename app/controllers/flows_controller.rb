class FlowsController < ApplicationController
  before_action :set_flow, only: [:show, :edit, :update, :destroy]

  def index
    @flows = current_user.flows
  end

  def show
  end

  def new
    @flow = Flow.new
  end

  def edit
  end

  def create
    @flow = Flow.new(flow_params.merge(user: current_user))

    if @flow.save
      redirect_to @flow, notice: 'Flow was successfully created.'
    else
      render :new
    end
  end

  def update
    respond_to do |format|
      if @flow.update(flow_params)
        format.html { redirect_to @flow, notice: 'Flow was successfully updated.' }
        format.json { render :show, status: :ok, location: @flow }
      else
        format.html { render :edit }
        format.json { render json: @flow.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @flow.destroy
    respond_to do |format|
      format.html { redirect_to flows_url, notice: 'Flow was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_flow
    @flow = Flow.find(params[:id])
  end

  def flow_params
    params.require(:flow).permit(:name, :description)
  end

end
