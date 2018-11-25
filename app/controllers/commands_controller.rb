class CommandsController < ApplicationController
  before_action :set_command, only: [:show, :edit, :update, :destroy]
  before_action :set_user
  before_action :set_flow

  def index
    @commands = Command.all
  end

  def show
  end

  def new
    @command = Command.new
  end

  def edit
  end

  def create
    @command = Command.new(command_params)

    if @command.save
      redirect_to flow_commands_path(@flow), notice: 'Command was successfully created.'
    else
      render :new
    end
  end

  def update
    if @command.update(command_params)
      redirect_to flow_commands_path(@flow), notice: 'Command was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @command.destroy
    redirect_to flow_commands_url(@flow), notice: 'Command was successfully destroyed.'
  end

  private

  def set_user
    @user = current_user
  end

  def set_command
    @command = Command.find(params[:id])
  end

  def set_flow
    @flow = current_user.flows.find_by(id: params[:flow_id])
  end

  def command_params
    params.require(:command).permit(:name, :description, :command, :user_id, :flow_id)
  end

end
