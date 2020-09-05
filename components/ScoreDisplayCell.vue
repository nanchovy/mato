<template>
<div>
  <div class="d-flex flex-column-reverse">

    <v-card
      v-for="n in [0, 1, 2, 3]"
      :key="n"
      class="hit-display"
      outlined
      tile
    >
      <!-- <div v-if='$store.state.results[tachi-1][n]'>
        {{$store.state.results[tachi-1][n]}}
      </div> -->
      <div v-if='$store.state.results[tachi-1][n]'>
        {{$store.state.results[tachi-1][n]}}
      </div>
      <div v-else>
        -
      </div>
    </v-card>
  </div>
  <v-row>
    <v-btn @click="$store.commit('OXButtonPushed', {tachi: tachi, isHit: 1})">まる</v-btn>
    <v-btn @click="$store.commit('OXButtonPushed', {tachi: tachi, isHit: 0})">ばつ</v-btn>


  </v-row>
    <v-btn @click="$store.commit('undoButtonPushed', {tachi: tachi})" color="warning">undo</v-btn>
</div>
</template>

<script>
export default {
  props: ['tachi'],
}
</script>

<style scoped>
.hit-display {
  font-family: "AppleSDGothicNeo";
  font-size: 120px;

}
</style>