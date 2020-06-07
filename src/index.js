// CODE FOR TESTING PROTOTYPES OF AS-YET-UNTITLED BOARD/CARD GAMES
// Documentation for game: https://www.notion.so/cookywook/Robot-Game-name-TBD-0afeed4bff7347278587f2702316dfc4

const CARDS = {
  attack: "ATTACK",
  repair: "REPAIR",
  move: "MOVE"
}

const DEFAULTS = {
  health: 10,
  deck: [
    CARDS.attack,
    CARDS.attack,
    CARDS.attack,
    CARDS.attack,
    CARDS.repair
  ]
}

class Robot {
  constructor(name) {
    this.name = name
    this.health = DEFAULTS.health
    this.wins = 0
    this.deck = DEFAULTS.deck
  }

  restoreFullHealth() {
    this.health = DEFAULTS.health
  }

  setEnemies(bots) {
    this.enemies = bots.filter(bot => bot !== this)
  }

  shuffleDeck() {
    console.log(`SHUFFLING DECK!!! for ${this.name}`)
    // Use slice before sorting so that original deck is not sorted
    this.unusedCards = this.deck.slice().sort(() => 0.5 - Math.random())
    this.usedCards = []
  }

  playTopCard(){
    if (this.unusedCards.length === 0) this.shuffleDeck()
    console.log(`${this.name} draws a card...`)
    // This removes the card from the start of the deck
    const card = this.unusedCards.shift()
    this.usedCards.push(card)
    this.playCard(card)
    console.log(`(${this.name} has ${this.unusedCards.length} cards remaining)`)
  }

  playCard(card) {
    switch(card) {
      case CARDS.attack:
        return this.attack()
      case CARDS.repair:
        return this.repair()
      case CARDS.move:
        return this.move()
      default:
        return null
    }
  }

  attack() {
    console.log(`${this.name} attacks!`)
    const target = this.selectTarget()
    target.takeDamage()
  }

  repair() {
    console.log(`${this.name} repairs!`)
    this.health++
  }
  move() {
    // TODO
  }

  takeDamage() {
    console.log(`${this.name} takes damage!`)
    this.health--
  }

  selectTarget() {
    return this.enemies[Math.floor(Math.random() * Array.length)]
  }
}

class Game {
  constructor(bots, totalRounds = 99) {
    this.bots = bots
    this.totalRounds = totalRounds
  }

  setup() {
    console.log("New game!!!!!!!!!!!!!!!!!!!!!!!");
    this.bots.forEach(bot => {
      bot.restoreFullHealth()
      bot.setEnemies(this.bots)
    })
    this.shuffle()
  }

  reset() {
    this.shuffle()
  }
  
  shuffle() {
    this.bots.forEach(bot => {
      bot.shuffleDeck()
    })
  }

  play() {
    this.setup()
    for (let round = 1; round <= this.totalRounds; round++) {
      console.log(`***************Round ${round} ******************`);
      this.switchCurrentBot()
      this.currentBot.playTopCard(this.bots)
      this.logStatus()
      if (this.isGameOver()) break
    }
    return this.selectWinner()
  }

  get currentBot() {
    return this._currentBot
  }

  set currentBot(bot) {
    if (!this.currentBot) {
      console.log(`${bot.name} goes first`)
    } else {
      console.log(`Switching from ${this.currentBot.name} to ${bot.name}`)
    }
    this._currentBot = bot
  }

  switchCurrentBot() {
    let availableBots

    if (!this.currentBot) {
      availableBots = this.bots
    } else {
      // TODO: Make sure each bot gets one turn per round?
      availableBots = this.bots.filter(b => b !== this.currentBot)
    }
    this.currentBot = availableBots[Math.floor(Math.random() * availableBots.length)]
  }

  logStatus() {
    this.bots.forEach(bot => {
      console.log(`${bot.name} health = ${bot.health}`)
    })
  }

  isGameOver() {
    return this.bots.find(bot => bot.health === 0)
  }

  selectWinner() {
    // The winner is the bot with the most health
    const winner = this.bots.sort((a, b) => b.health - a.health)[0]
    console.log(`The winner is... ${winner.name}`)
    return winner
  }
}

const playGames = (totalGames = 99) => {
  const bot1 = new Robot("Robot 1")
  const bot2 = new Robot("Robot 2")
  const records = {}
  
  for (let game = 1; game <= totalGames; game++){
    const newGame = new Game([bot1, bot2])
    const winner = newGame.play()
    records[winner.name] = (records[winner.name] || 0) + 1
  }
  Object.keys(records).forEach(player => {
    console.log(`${player} won ${records[player]} times`)
  })
}

playGames(99)
