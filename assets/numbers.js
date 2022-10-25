// =============
// == Globals ==
// =============
const canvas = document.getElementById("drawing-area");
const canvasContext = canvas.getContext("2d");
const clearButton = document.getElementById("clear-button");
const state = {
  mousedown: false,
};

// ===================
// == Configuration ==
// ===================
const lineWidth = 10;
const halfLineWidth = lineWidth / 2;
const fillStyle = "#333";
const strokeStyle = "#333";
const shadowColor = "#333";
const shadowBlur = lineWidth / 0;

// =====================
// == Event Listeners ==
// =====================
canvas.addEventListener("mousedown", handleWritingStart);
canvas.addEventListener("mousemove", handleWritingInProgress);
canvas.addEventListener("mouseup", handleDrawingEnd);
canvas.addEventListener("mouseout", handleDrawingEnd);

canvas.addEventListener("touchstart", handleWritingStart);
canvas.addEventListener("touchmove", handleWritingInProgress);
canvas.addEventListener("touchend", handleDrawingEnd);

clearButton.addEventListener("click", handleClearButtonClick);

// ====================
// == Event Handlers ==
// ====================
function handleWritingStart(event) {
  event.preventDefault();

  const mousePos = getMousePositionOnCanvas(event);

  canvasContext.beginPath();

  canvasContext.moveTo(mousePos.x, mousePos.y);

  canvasContext.lineWidth = lineWidth;
  canvasContext.strokeStyle = strokeStyle;
  canvasContext.shadowColor = null;
  canvasContext.shadowBlur = null;

  canvasContext.fill();

  state.mousedown = true;
}

function handleWritingInProgress(event) {
  event.preventDefault();

  if (state.mousedown) {
    const mousePos = getMousePositionOnCanvas(event);

    canvasContext.lineTo(mousePos.x, mousePos.y);
    canvasContext.stroke();
  }
}

function handleDrawingEnd(event) {
  event.preventDefault();

  if (state.mousedown) {
    canvasContext.shadowColor = shadowColor;
    canvasContext.shadowBlur = shadowBlur;

    canvasContext.stroke();
  }

  state.mousedown = false;
}

function handleClearButtonClick(event) {
  event.preventDefault();

  clearCanvas();
}

// ======================
// == Helper Functions ==
// ======================

window.addEventListener('mousemove', mouseMoveEvent);

function mouseMoveEvent(e) {
    var canvas = document.getElementById('canvas');
    var rect = canvas.getBoundingClientRect();
    var mouseX = e.clientX - rect.left;
    var mouseY = e.clientY - rect.top;
};


function getMousePositionOnCanvas(event) {
 
  var rect = canvas.getBoundingClientRect();
  const clientX = (event.clientX-rect.left ) / (rect.right - rect.left) * canvas.width || event.touches[0].clientX;
  const clientY = (event.clientY-rect.top) / (rect.bottom - rect.top) * canvas.height || event.touches[0].clientY;
  const { offsetLeft, offsetTop } = event.target;
  const canvasX = clientX 
  const canvasY = clientY 

  return { x: canvasX, y: canvasY };
}








function clearCanvas() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
}
