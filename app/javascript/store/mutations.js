export default {

  viewToggle(state, {targetView}) {
    const viewList = {
      "commandView": "commandViewVisible",
      "detailView": "detailViewVisible"
    }
    if (typeof viewList[targetView] !== "undefined") {
      state[viewList[targetView]] = !state[viewList[targetView]]
    }
  }

}
