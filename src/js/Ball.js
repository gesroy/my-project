export default class Ball {
  constructor(x, y) {
    this.createElement(x, y)
    this.setPosition()
    this.queueUpdate()
    this.setupEvents()
    this.changeBackground()
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
      event.stopPropagation()
      this.destroy()
      //const countUpdate = +1
    })
  }

  //insertCounter() {
  //const
  //counter.insertAdjacentElement
  //}

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
    document.body.insertAdjacentElement('beforeend', this.el)
  }

  setPosition() {
    this.el.style.left = `${this.pos.x}px`
    this.el.style.top = `${this.pos.y}px`
  }
}
