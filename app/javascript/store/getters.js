export default {

  viewGrid(state) {
    if (state.commandViewVisible && state.detailViewVisible) {
      return 'col s6'
    } else {
      return 'col s12'
    }
  },

}
