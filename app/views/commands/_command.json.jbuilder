json.extract! command, :id, :name, :description, :command, :created_at, :updated_at
json.url flow_command_url(flow_id: command.flow, id: command, format: :json)
