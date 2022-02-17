const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  //color array
  
  const button = document.querySelector("button");
  const body = document.querySelector("body");
  const WhatIsColor = document.querySelector("h2");
  
  function onClick() {
    const x = colors[Math.floor(Math.random() * colors.length)];
    const y = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundImage = `linear-gradient(${x}, ${y})`;
    WhatIsColor.innerText = `These colors are <${x}> and <${y}>.`



    if(x === y) {
        colors[Math.floor(Math.random() * colors.length)];
    } else {
        ("")
    }
  }
  
  button.addEventListener("click", onClick);

