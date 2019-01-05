class CommandsController < ApplicationController
  before_action :set_command, only: [:show, :edit, :update, :destroy]
  before_action :set_user
  before_action :set_flow

  def index
    @commands = @flow.commands.all
    render :index, format: :json
  end

  def show
  end

  def new
    @command = Command.new
  end

  def edit
  end

  def create
    @command = current_user.flows.find_by(id: params[:flow_id]).commands.new(command_params)

    respond_to do |format|

      if @command.save
        format.html { redirect_to flow_commands_path(@flow), notice: 'Command was successfully created.' }
        format.json { render :show }
      else
        format.html { render :new }
        format.json { render json: @command.errors, status: 500 }
      end

    end
  end

  def update
    respond_to do |format|
      if @command.update(command_params)
        format.html { redirect_to flow_commands_path(@flow), notice: 'Command was successfully updated.' }
        format.json { render :show }
      else
        format.html { render :edit }
        format.json { render json: @command.errors, status: 500 }
      end
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
