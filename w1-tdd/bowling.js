let game1Frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]

function scoreGame(frames) {
  let score = 0

  for(let i = 0; i < frames.length; i++) {
    let frame = frames[i]
    let nextFrame = frames[i+1]
    let nextNextFrame = frames[i+2]

    let frameScore = scoreFrame(frame, nextFrame, nextNextFrame)

    console.log(frame, frameScore)

    score += frameScore
  }

  return score
}

function scoreFrame(frame, nextFrame, nextNextFrame) {
  let frameScore = simpleFrameScore(frame)

  if (frameIsSpare(frame)) {
    frameScore = firstBall(frame) + secondBall(frame) + firstBall(nextFrame)
  }

  // if (frameIsSpare(frame)) frameScore = scoreSpareFrame(frame, nextFrame)

  // Double Strike
  if (frameScore == 10 && firstBall(nextFrame) == 10) {
    frameScore = firstBall(frame) + firstBall(nextFrame) + firstBall(nextNextFrame)
  }

  // Strike
  if (frameScore == 10 && firstBall(frame) == 10) {
    frameScore = firstBall(frame) + firstBall(nextFrame) + secondBall(nextFrame)
  }

  return frameScore
}

function simpleFrameScore(frame) {
  return firstBall(frame) + secondBall(frame)
}

function firstBall(frame) {
  return frame[0]
}

function secondBall(frame) {
  return frame[1]
}

function frameIsSpare(frame) {
  return simpleFrameScore(frame) == 10 && firstBall(frame) < 10
}


console.log('Game 1 (should be 119): ', scoreGame(game1Frames))
