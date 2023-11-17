const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

const playerImage = new Image()
playerImage.src = 'assets/shadow_dog.png'

const spriteWidth = 575
const spriteHeight = 523
const staggerFrames = 5

const spriteAnimations = createSpriteAnimations(spriteWidth, spriteHeight)

let frameX = 0
let frameY = 0
let gameFrame = 0

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations['idle'].loc.length
  frameX = spriteAnimations['idle'].loc[position].x
  ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
  gameFrame++
  requestAnimationFrame(animate)
}

animate()