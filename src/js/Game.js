import Ball from './Ball'

export default class Game {
  constructor() {
    //document.body.addEventListener('click', event => this.handleClick(event))
    this.initiateRandomBall()
  }

  //handleClick(event) {
  //const { clientX, clientY } = event
  //new Ball(clientX, clientY)
  //}

  getRandomTime() {
    return 100 + Math.random() * 2000
  }

  initiateRandomBall() {
    setTimeout(() => {
      const x = Math.random() * window.screen.width
      const y = window.screen.height
      new Ball(x, y)
      this.initiateRandomBall()
    }, 1000)
  }
}
