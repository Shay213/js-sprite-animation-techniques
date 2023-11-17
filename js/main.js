const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

const playerImage = new Image()
playerImage.src = 'assets/shadow_dog.png'

const spriteWidth = 575
const spriteHeight = 523
const staggerFrames = 5
let playerState = 'idle'

const spriteAnimations = createSpriteAnimations(spriteWidth, spriteHeight)

let gameFrame = 0

function animate(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length

  let frameX = spriteAnimations[playerState].loc[position].x
  let frameY = spriteAnimations[playerState].loc[position].y

  ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)
  
  gameFrame++
  requestAnimationFrame(animate)
}

animate()