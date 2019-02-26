<template>
  <v-container class="maxWidth">
    <h1>{{ expansion.name }}</h1>
    <v-layout row wrap>
      <raid-card v-for="raid in expansion.raids" v-bind:key="raid.name" :raid="raid"/>
    </v-layout>
  </v-container>
</template>

<script>
import RaidCard from '@/components/RaidCard.vue'
export default {
  components: { RaidCard },
  props: ['expansion']
}
</script>

<style scoped>
.maxWidth {
  max-width: 1400px;
}
</style>
