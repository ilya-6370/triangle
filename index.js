const canvas = document.getElementById("1")
const startBtn = document.getElementById("start")
const triangleBtn = document.getElementById("line")
const numOfIteration = document.getElementById("num")

let activated = false

// ctx.fillStyle = "#FF0000";
startBtn.addEventListener("click", () => {
    startWhile()
})
triangleBtn.addEventListener("click", () => {
    drawTriangle(A, B, C)
})


const A = { x: 10, y: 100 }
DrawDot(A, "#000")
const B = { x: 100, y: 10 }
DrawDot(B, "#32a852")
const C = { x: 200, y: 100 }
DrawDot(C, "#fcba03")

const startPosition = { x: getRandomInt(200), y: getRandomInt(100) }
DrawDot(startPosition, "#eb4034")


function pickRandomDot(dots) {
    return dots[getRandomInt(dots.length)]
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function DrawDot(Dot, color) {
    const ctx = canvas.getContext("2d")

    ctx.fillStyle = color;
    const circle = new Path2D()
    // ctx.beginPath();
    circle.arc(Dot.x, Dot.y, 2.5, 0, Math.PI * 2, true);
    ctx.fill(circle)

}

function drawTriangle(A, B, C) {
    const ctx = canvas.getContext("2d")

    // ctx.fillStyle = "#FF0000";

    ctx.beginPath()
    ctx.moveTo(A.x, A.y)
    ctx.lineTo(B.x, B.y)
    ctx.lineTo(C.x, C.y)
    ctx.lineTo(A.x, A.y)
    ctx.stroke()

}

function startWhile() {
    for(let x = 0; x<numOfIteration.value; x++){
        getNewDot()
    }
    
}
let lastDot = startPosition

function getNewDot() {
    const ctx = canvas.getContext("2d")

    const dot = pickRandomDot([A, B, C])
    console.log(dot);
    ctx.beginPath()
    const newDot = { x: calculateNewPosition(lastDot, dot)[0], y: calculateNewPosition(lastDot, dot)[1] }
    console.log(newDot);
    ctx.moveTo(newDot.x, newDot.y)
    DrawDot(newDot)
    lastDot = newDot
}
function calculateNewPosition(lastDot, chousenDot) {
    
  let midX=lastDot.x+(chousenDot.x-lastDot.x)*0.50;
  let midY=lastDot.y+(chousenDot.y-lastDot.y)*0.50;
  return [midX,midY]
}