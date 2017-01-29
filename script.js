// Introductions
var playerName = window.prompt('What\'s your name?')
if (playerName === null || playerName.trim() === '') {
  window.alert('Fine, then - be anonymous. We\'ll call you PLAYER.')
  playerName = 'PLAYER'
} else {
  playerName = playerName.trim().toUpperCase()
}
window.alert('Hello, ' + playerName)

// First choice
var choice = window.prompt('You must choose')
if (choice === null) {
  choice = window.prompt('Seriously, just pick something.')
  if (choice === null) {
    window.alert('Okay, your loss')
  }
}
choice = choice.trim().toLowerCase()
if (choice === 1) {
  window.alert('You picked 1') // change this to something real
} else if (choice === 2) {
  window.alert('You picked 2')// change this to something real
} else {
  window.alert(playerName + ' is attacked by a rabid unicorn!')
  var saveSelf = window.confirm('Do you want to save yourself?')
  if (saveSelf === false) {
    window.alert('Well then, I guess you\'re dead - that\'s nihilistic.')
  } else {
    window.alert('Good choice, let\'s keep going.')
  }
}
