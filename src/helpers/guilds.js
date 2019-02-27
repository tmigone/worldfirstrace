function guildColor (name) {
  let color = 'black'
  switch (name.toLowerCase()) {
    case 'method':
      color = '#FF9117'
      break
    case 'exorsus':
      color = '#7d7de2'
      break
    case 'paragon':
      color = 'red'
      break
    case 'blood legion':
      color = 'green'
      break
    case 'ensidia':
      color = 'purple'
      break
    case 'kin raiders':
      color = 'brown'
      break
    case 'stars':
      color = '#7fff00'
      break
    case 'nihilum':
      color = '#008080'
      break
    case 'drama':
      color = '#afe025'
      break
    case 'ascent':
      color = '#901515'
      break
    case 'the chosen':
      color = '#8e18a9'
      break
    case 'sk gaming':
      color = '#7c8887'
      break
  }
  return color
}

module.exports = {
  color: guildColor
}
