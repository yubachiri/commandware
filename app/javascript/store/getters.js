export default {

  viewGrid(state) {
    if (state.commandViewVisible && state.detailViewVisible) {
      return 'col s5'
    } else {
      return 'col s10 offset-s1'
    }
  },

}
