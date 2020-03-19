export const aaa = 'edrhxser'

// get window data
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight
let maxEdgeSizeOfWindow = Math.max(windowWidth, windowHeight)
let widthIsMaxEdgeOfWindow = windowWidth - windowHeight > 0
const image = new Image()
let imageIsLoaded = false
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const context = canvas.getContext('2d')

window.onload = function() {
  window.onresize = function() {
    // udpate window data
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
    maxEdgeSizeOfWindow = Math.max(windowWidth, windowHeight)
    widthIsMaxEdgeOfWindow = windowWidth - windowHeight > 0

    updateCanvas()
  }

  updateCanvas()
}

function updateCanvas(offsetX?: number, offsetY?: number, scale?: number) {
  if (imageIsLoaded) {
    render()
  } else {
    image.onload = () => {
      imageIsLoaded = true
      render()
    }
    image.src = '../images/a.jpg'
  }
}

function render() {
  const imageWidth = image.width
  const imageHeight = image.height
  const widthIsMaxEdgeOfImage = imageWidth - imageHeight > 0

  // Rotate 90 degree
  if (widthIsMaxEdgeOfWindow !== widthIsMaxEdgeOfImage) {
    console.log('max edge is in the same direction', false)

    canvas.width = imageHeight
    canvas.height = imageWidth
    const maxEdgeSizeOfCanvas = Math.max(canvas.width, canvas.height)
    updateCanvasSize(canvas, maxEdgeSizeOfCanvas)

    context.save()
    context.rotate((90 * Math.PI) / 180)
    context.drawImage(image, 0, -canvas.width, canvas.height, canvas.width)
    context.restore()
  } else {
    console.log('max edge is in the same direction', true)

    canvas.width = imageWidth
    canvas.height = imageHeight
    const maxEdgeSizeOfCanvas = Math.max(canvas.width, canvas.height)
    updateCanvasSize(canvas, maxEdgeSizeOfCanvas)

    context.drawImage(image, 0, 0, canvas.width, canvas.height)
  }
}

// resize canvas
function updateCanvasSize(canvas: HTMLCanvasElement, maxEdgeSizeOfCanvas: number, scale?: number) {
  // make sure canvas max edge equals window max edge
  let factor = maxEdgeSizeOfWindow / maxEdgeSizeOfCanvas
  canvas.width = canvas.width * factor
  canvas.height = canvas.height * factor

  // make sure another edge in window
  if (widthIsMaxEdgeOfWindow) {
    if (canvas.height > windowHeight) {
      const factor = windowHeight / canvas.height
      canvas.width = canvas.width * factor
      canvas.height = canvas.height * factor
    }
  } else {
    if (canvas.width > windowWidth) {
      const factor = windowWidth / canvas.width
      canvas.width = canvas.width * factor
      canvas.height = canvas.height * factor
    }
  }

  // scale overall
  if (scale || scale === 0) {
    canvas.width = canvas.width * scale
    canvas.height = canvas.height * scale
  }
}
