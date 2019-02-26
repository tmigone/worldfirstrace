<template>
  <div>
    <table>
      <tr>
        <th v-for="(column, indexCol) in tableColumns" v-bind:key="indexCol">{{ column }}</th>
      </tr>
      <tr v-for="(data, index) in $store.state.data" v-bind:key="index" :class="raidNameToClass(data.expansion)">
        <td>
          <img :src="raidNameToImage(data.expansion)" class="logo">
        </td>
        <td>
          {{ data.raid.name }}
          <br>
          {{ data.raid.type + ' - ' + data.raid.players }}
          <br>
          {{ data.raid.date }}
        </td>
        <td>
          {{ data.kill.boss }}
          <br>
          {{ data.kill.date }}
        </td>
        <td>{{ data.kill.daysLived }}</td>
        <td>{{ data.kill.guild + ' (' + data.kill.region + ')' }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableColumns: ['Expansion', 'Raid', 'Boss', 'Days lived', 'Guild']
    }
  },
  methods: {
    raidNameToImage: function (name) {
      if (name === 'Vanilla') return './logos/vainilla.png'
      if (name === 'The Burning Crusade') return './logos/bc.png'
      if (name === 'Wrath of the Lich King') return './logos/wrath.png'
      if (name === 'Cataclysm') return './logos/cata.png'
      if (name === 'Mists of Pandaria') return './logos/pandaria.png'
      if (name === 'Warlords of Draenor') return './logos/draenor.png'
      if (name === 'Legion') return './logos/legion.png'
      if (name === 'Battle for Azeroth') return './logos/bfa.png'
    },
    raidNameToClass: function (name) {
      if (name === 'Vanilla') return 'vainilla'
      if (name === 'The Burning Crusade') return 'bc'
      if (name === 'Wrath of the Lich King') return 'wrath'
      if (name === 'Cataclysm') return 'cata'
      if (name === 'Mists of Pandaria') return 'pandaria'
      if (name === 'Warlords of Draenor') return 'draenor'
      if (name === 'Legion') return 'legion'
      if (name === 'Battle for Azeroth') return 'bfa'
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.grey {
  color: grey;
}
.green {
  color: green;
}
.red {
  color: red;
}
td,
th {
  padding-left: 15px;
  padding-right: 15px;
}
table {
  margin: 0 auto;
}
h1 {
  margin-bottom: 0px;
}
h5 {
  margin-top: 0px;
}
.logo {
  width: 100px;
}
.vainilla {
  background-color:rgb(66,79,114);
}
.bc {
  background-color:rgb(115,166,53);
}
.wrath {
  background-color:rgb(47,134,221);
}
.cata {
  background-color:rgb(229,125,44);
}
.pandaria {
  background-color:rgb(33,132,97);
}
.draenor {
  background-color:rgb(207,28,53);
}
.legion {
  background-color:rgb(103,168,42);
}
.bfa {
  background-color:rgb(32,48,77);
}
</style>
