import Ball from './Ball'

let score = 0
let text = `Click on Balloons`

export default class Game {
  constructor() {
    this.scoreboard = document.querySelector('[data-js=scoreboard]')
    this.initiateRandomBall()
    this.scoreboard.innerHTML = text
  }

  //handleClick(event) {
  //const { clientX, clientY } = event
  //new Ball(clientX, clientY)
  //}

  getRandomTime() {
    return 100 + Math.random() * 6000
  }

  initiateRandomBall() {
    setTimeout(() => {
      const x =
        window.screen.availWidth * 0.3 +
        Math.random() * (window.screen.availWidth * 0.7)
      //const x = (Math.random() * (window.availWidth * 0.8)
      const y = window.screen.height
      new Ball(x, y, this.countClickedBalls.bind(this))
      this.initiateRandomBall()
    }, this.getRandomTime())
  }

  countClickedBalls() {
    //this.scoreboard.innerHTML = ''
    score = score + 1
    text = `Yippieh ${score}`
    this.scoreboard.innerHTML = text
  }
}
