import { throws } from 'assert'

const ballscontainer = document.querySelector('[data-js=ballscontainer]')

export default class Ball {
  constructor(x, y, countClickedBalls) {
    //document.body.addEventListener('click', event => this.handleClick(event))
    this.createElement(x, y)
    this.setPosition()
    this.queueUpdate()
    this.setupEvents()
    this.changeBackground()
    this.countClickedBalls = countClickedBalls
  }

  changeBackground() {
    this.el.style.background = this.getRandomBackground()
  }

  getRandomBackground() {
    const rand = () => Math.round(Math.random() * 255)
    return `rgb(${rand()}, ${rand()}, ${rand()})`
  }

  setupEvents() {
    this.el.addEventListener('click', event => {
      this.countClickedBalls()
      event.stopPropagation()
      this.destroy()
    })
  }

  destroy() {
    cancelAnimationFrame(this.animationFrame)
    this.el.style.transform = 'scale(2)'
    setTimeout(() => {
      this.el.remove()
      this.el = null
    }, 100)
  }

  queueUpdate() {
    this.a = this.a ? this.a * 1.008 : 0.1
    this.pos.y -= this.a
    this.setPosition()
    this.animationFrame = requestAnimationFrame(() => {
      this.pos.y < -50 ? this.destroy() : this.queueUpdate()
    })
  }

  createElement(x, y) {
    this.pos = { x, y }
    this.el = document.createElement('div')
    this.el.className = 'ball'
    ballscontainer.insertAdjacentElement('beforeend', this.el)
  }

  setPosition() {
    this.el.style.left = `${this.pos.x}px`
    this.el.style.top = `${this.pos.y}px`
  }
}
