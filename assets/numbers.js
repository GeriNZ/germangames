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
const lineWidth = 5;
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




function getMousePositionOnCanvas(event) {
 
  var rect = canvas.getBoundingClientRect();
  const clientX = (event.clientX-rect.left ) / (rect.right - rect.left) * canvas.width || (event.touches[0].clientX - rect.left) / (rect.right - rect.left) * canvas.width;
  const clientY = (event.clientY-rect.top) / (rect.bottom - rect.top) * canvas.height || (event.touches[0].clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
  const { offsetLeft, offsetTop } = event.target;
  const canvasX = clientX 
  const canvasY = clientY 

  return { x: canvasX, y: canvasY };
}








function clearCanvas() {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
}




// ====================
// == second canvas  ==
// ====================




// =============
// == Globals ==
// =============
const canvas1 = document.getElementById("drawing-area1");
const canvasContext1 = canvas1.getContext("2d");
const clearButton1 = document.getElementById("clear-button1");
const state1 = {
  mousedown: false,
};

// ===================
// == Configuration ==
// ===================
const lineWidth1 =5;
const halfLineWidth1 = lineWidth1 / 2;
const fillStyle1 = "red";
const strokeStyle1 = "red";
const shadowColor1 = "red";
const shadowBlur1 = lineWidth1 / 0;

// =====================
// == Event Listeners ==
// =====================
canvas1.addEventListener("mousedown", handleWritingStart1);
canvas1.addEventListener("mousemove", handleWritingInProgress1);
canvas1.addEventListener("mouseup", handleDrawingEnd1);
canvas1.addEventListener("mouseout", handleDrawingEnd1);

canvas1.addEventListener("touchstart", handleWritingStart1);
canvas1.addEventListener("touchmove", handleWritingInProgress1);
canvas1.addEventListener("touchend", handleDrawingEnd1);

clearButton1.addEventListener("click", handleClearButtonClick1);

// ====================
// == Event Handlers ==
// ====================
function handleWritingStart1(event) {
  event.preventDefault();

  const mousePos1 = getMousePositionOnCanvas1(event);

  canvasContext1.beginPath();

  canvasContext1.moveTo(mousePos1.x, mousePos1.y);

  canvasContext1.lineWidth = lineWidth;
  canvasContext1.strokeStyle1 = strokeStyle1;
  canvasContext1.shadowColor1 = null;
  canvasContext1.shadowBlur1 = null;

  canvasContext1.fill();

  state1.mousedown = true;
}

function handleWritingInProgress1(event) {
  event.preventDefault();

  if (state1.mousedown) {
    const mousePos1 = getMousePositionOnCanvas1(event);

    canvasContext1.lineTo(mousePos1.x, mousePos1.y);
    canvasContext1.stroke();
  }
}

function handleDrawingEnd1(event) {
  event.preventDefault();

  if (state1.mousedown) {
    canvasContext1.shadowColor1 = shadowColor1;
    canvasContext1.shadowBlur1 = shadowBlur1;

    canvasContext1.stroke();
  }

  state1.mousedown = false;
}

function handleClearButtonClick1(event) {
  event.preventDefault();

  clearCanvas1();
}

// ======================
// == Helper Functions ==
// ======================




function getMousePositionOnCanvas1(event) {
 
  var rect1 = canvas1.getBoundingClientRect();
  const clientX = (event.clientX-rect1.left ) / (rect1.right - rect1.left) * canvas1.width || (event.touches[0].clientX - rect1.left) / (rect1.right - rect1.left) * canvas1.width;
  const clientY = (event.clientY-rect1.top) / (rect1.bottom - rect1.top) * canvas1.height || (event.touches[0].clientY - rect1.top) / (rect1.bottom - rect1.top) * canvas1.height;
  const { offsetLeft, offsetTop } = event.target;
  const canvasX = clientX 
  const canvasY = clientY 

  return { x: canvasX, y: canvasY };
}








function clearCanvas1() {
  canvasContext1.clearRect(0, 0, canvas1.width, canvas1.height);
}
