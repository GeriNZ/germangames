// const current = 0;
// for (var i = 0; i < document.links.length; i++) {
//     if (document.links[i].href === document.URL) {
//         current = i;
//     }
// }
// document.links[current].className = 'current';




function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

const jumbledWords = document.querySelectorAll("#jumbledWordsWrapper > span");
const orderedWords = document.querySelectorAll("#orderedWordsWrapper > span");

jumbledWords.forEach((el) => {
  el.addEventListener("dragstart", dragStartHandler);
  el.addEventListener("dragend", dragEndHandler);
});
orderedWords.forEach((el) => {
  el.addEventListener("dragenter", dragEnterHandler);
  el.addEventListener("dragover", dragOverHandler);
  el.addEventListener("dragleave", dragLeaveHandler);
  el.addEventListener("drop", dropHandler);
});

function dragStartHandler(e) {
  e.dataTransfer.setData("text", e.target.getAttribute("data-source-id"));
  e.target.style = "opacity: 0.3";
}
function dragEndHandler(e) {
  e.target.style = "opacity: 1";
}

function dragEnterHandler(e) {
  e.target.style =
    "border: 2px dashed gray; box-sizing: border-box; background: whitesmoke";
}

function dragOverHandler(e) {
  event.preventDefault();
}

function dragLeaveHandler(e) {
  e.target.style = "border: none; background: #abcdef";
}

function dropHandler(e) {
  e.preventDefault();
  dragLeaveHandler(e);

  const dataSourceId = e.dataTransfer.getData("text");
  const dataTargetId = e.target.getAttribute("data-target-id");

  if (dataSourceId === dataTargetId) {
    e.target.insertAdjacentHTML("afterbegin", dataSourceId);
    e.target.style = "border: none; background: #abcdef";

    let sourceElemDataId = 'span[data-source-id="' + dataSourceId + '"]';
    let sourceElemSpanTag = document.querySelector(sourceElemDataId);

    Object.assign(sourceElemSpanTag, {
      className: "no-longer-draggable",
      draggable: false,
    });
  }
}


// Good morning
let counter = document.getElementById("counter")
let result = document.getElementById("result")
let count = 0
counter.addEventListener("click", () => {
  count += 1
  result.innerHTML = count
})

// Good day
let counter1 = document.getElementById("counter1")
let result1 = document.getElementById("result1")
let count1 = 0
counter1.addEventListener("click", () => {
  count1 += 1
  result1.innerHTML = count1
})

// Good evening
let counter2 = document.getElementById("counter2")
let result2 = document.getElementById("result2")
let count2 = 0
counter2.addEventListener("click", () => {
  count2 += 1
  result2.innerHTML = count2
})

// hallo
let counter3 = document.getElementById("counter3")
let result3 = document.getElementById("result3")
let count3 = 0
counter3.addEventListener("click", () => {
  count3 += 1
  result3.innerHTML = count3
})

// moin
let counter4 = document.getElementById("counter4")
let result4 = document.getElementById("result4")
let count4 = 0
counter4.addEventListener("click", () => {
  count4 += 1
  result4.innerHTML = count4
})

// Herzlich Willkommen
let counter5 = document.getElementById("counter5")
let result5 = document.getElementById("result5")
let count5 = 0
counter5.addEventListener("click", () => {
  count5 += 1
  result5.innerHTML = count5
})

// Gruess gott
let counter6 = document.getElementById("counter6")
let result6 = document.getElementById("result6")
let count6 = 0
counter6.addEventListener("click", () => {
  count6 += 1
  result6.innerHTML = count6
})

// gruess dich
let counter7 = document.getElementById("counter7")
let result7 = document.getElementById("result7")
let count7 = 0
counter7.addEventListener("click", () => {
  count7 += 1
  result7.innerHTML = count7
})

// servus
let counter8 = document.getElementById("counter8")
let result8 = document.getElementById("result8")
let count8 = 0
counter8.addEventListener("click", () => {
  count8 += 1
  result8.innerHTML = count8
})

// gruezi
let counter9 = document.getElementById("counter9")
let result9 = document.getElementById("result9")
let count9 = 0
counter9.addEventListener("click", () => {
  count9 += 1
  result9.innerHTML = count9
})



const resetCounter = () =>{
  // Update the UI
  result.innerHTML = 0;
  result1.innerHTML = 0;
  result2.innerHTML = 0;
  result3.innerHTML = 0;
  result4.innerHTML = 0;
  result5.innerHTML = 0;
  result6.innerHTML = 0;
  result7.innerHTML = 0;
  result8.innerHTML = 0;
  result9.innerHTML = 0;
  // Update the variable container
  // count = 0;
}


const resetButton = document.getElementById("reset-btn");
resetButton.addEventListener('click', resetCounter);


