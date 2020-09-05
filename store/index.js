export const state = () => ({
  results: [[], [], [], [], [], []]
})

export const mutations = {
  OXButtonPushed(state, payload) {
    // payload: { tachi: int, isHit: bool }
    let tachi_index = payload["tachi"] - 1;
    if (state.results[tachi_index].length >= 4) return;
    if (payload["isHit"]) {
      state.results[tachi_index].push("●");
    } else {
      state.results[tachi_index].push("✕");
    }
  },
  undoButtonPushed(state, payload) {
    // payload: tachi: int
    let tachi_index = payload["tachi"] - 1;
    if (state.results[tachi_index].length <= 0) return;
    state.results[tachi_index].pop();
  }
}