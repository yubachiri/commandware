export default {

  viewToggle(state, {targetView, isShow}) {
    const viewList = {
      "commandView": "commandViewVisible",
      "detailView": "detailViewVisible"
    }
    if (typeof viewList[targetView] !== "undefined") {
      state[viewList[targetView]] = isShow
    }
  },

  assignFlows(state, flows) {
    state.flows = flows
  },
  assignFlow(state, flow) {
    state.flow = flow
  },
  assignCommands(state, commands) {
    state.commands = commands
  },
  assignCommand(state, command) {
    state.command = command
  },

  addFlow(state, flow) {
    state.flows.push(flow)
  },
  addCommand(state, command) {
    state.commands.push(command)
  },
  updateCommand(state, newCommand) {
    var targetCommand = state.commands.filter(command => {
      return command.id === newCommand.id
    })[0]
    targetCommand = newCommand
  },

}
