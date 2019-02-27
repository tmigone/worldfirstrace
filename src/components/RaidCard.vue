<template>
  <v-flex xs12 sm6 md4 lg3>
    <v-card>
      <img :src="'./raids/' + raid.background">
      <v-card-title>
        <span class="raidName">{{ raid.name }}&nbsp;</span>
        <span class="grey--text">{{ raid.type + ' ' + raid.players }}</span>
        <br>
        <span>{{ raid.date }} - {{ raid.kill.date }}</span>
        <br>
        <span class="raidLived">
          <i>{{ raid.boss }} lived for {{ raid.kill.daysLived }} days</i>
        </span>
      </v-card-title>
      <v-card-actions>
        <v-btn
          flat
          :color="guildToColor(raid.kill.guild)"
        >{{ raid.kill.guild }} ({{ raid.kill.region }})</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import guild from '@/helpers/guilds.js'
export default {
  props: ['raid'],
  methods: {
    guildToColor: guild.color,
  }
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
  display: block;
}
.raidName {
  font-size: 18px;
  font-weight: bold;
}
.raidLived {
  font-size: 12px;
}
</style>
