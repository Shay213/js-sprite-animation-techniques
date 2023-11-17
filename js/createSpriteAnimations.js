const createSpriteAnimations = (spriteWidth, spriteHeight) => {
  const spriteAnimations = []

  animationStates.forEach((state, i) => {
    spriteAnimations[state.name] = {loc: []}
    for(let j = 0; j < state.frames; j++){
      spriteAnimations[state.name].loc.push({
        x: j * spriteWidth,
        y: i * spriteHeight
      })
    }
  })

  return spriteAnimations
}