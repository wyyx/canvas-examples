export const aaa = 'szergh'

let WINDOW_WIDTH = 1024
let WINDOW_HEIGHT = 768

window.onload = function() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  const context = canvas.getContext('2d')

  canvas.width = 1000
  canvas.height = 1000

  render(context)
}

export function render(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, 1000, 1000)

  // ctx.beginPath()
  ctx.arc(300, 300, 100, 0, 2 * Math.PI, false)
  ctx.arc(300, 300, 200, 0, 2 * Math.PI, true)
  ctx.shadowColor = 'blue'
  ctx.shadowBlur = 30
  ctx.shadowOffsetX = 10
  ctx.shadowOffsetY = 10
  // ctx.closePath()

  ctx.fill()
}
