export default {

  viewToggle(state, {targetView}) {
    const viewList = {
      "commandView": "commandViewVisible",
      "detailView": "detailViewVisible"
    }
    if (typeof viewList[targetView] !== "undefined") {
      state[viewList[targetView]] = !state[viewList[targetView]]
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

}
