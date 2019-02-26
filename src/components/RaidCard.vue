<template>
  <v-flex xs12 sm6 md4 lg3>
    <v-card>
      <img :src="'./raids/' + raid.background">
      <v-card-title>
        <span class="raidName">{{ raid.name }}&nbsp;&nbsp;</span>
        <span class="grey--text">{{ raid.type + ' ' + raid.players }}</span>
        <br>
        <span>{{ raid.date }} - {{ raid.kill.date }}</span>
        <br>
        <span class="raidLived">
          <i>{{ raid.boss }} lived for {{ raid.kill.daysLived }} days</i>
        </span>
      </v-card-title>
      <v-card-actions>
        <v-btn flat>{{ raid.kill.guild }} ({{ raid.kill.region }})</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['raid']
}
</script>

<style scoped>
.v-btn {
  margin: auto;
  color: red;
}
.v-card {
  margin: 2%;
}
.v-card img {
  width: 100%;
}
.v-card__title {
  padding-bottom: 0px;
  text-align: left;
}
.raidName {
  font-size: 20px;
  font-weight: bold;
}
.raidLived {
  font-size: 12px;
}
</style>
