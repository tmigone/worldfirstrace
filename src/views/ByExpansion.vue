<template>
  <div>
    <expansion-card v-for="expansion in $store.state.expansions" v-bind:key="expansion.name" :expansion="expansion"/>
  </div>
</template>

<script>
import ExpansionCard from '@/components/ExpansionCard.vue'
export default {
  components: { ExpansionCard }
}
</script>
