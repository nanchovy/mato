<template>
  <v-container>
    <v-row>
      <v-col
        v-for="i in 6"
        :key="i"
      >
      <score-display-cell
        :tachi="i"
      />
      </v-col>
    </v-row>
  </v-container>
</template>


<script>

import ScoreDisplayCell from '@/components/ScoreDisplayCell.vue'

export default {
  components: {
    ScoreDisplayCell,
  },
}
</script>

