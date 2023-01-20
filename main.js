const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const selection = document.querySelector("#selection");

let visi = document.querySelectorAll("#selection > div");

let resultatas = document.createElement("h2");
let extradiv2 = document.createElement("div");
extradiv2.classList.add("extradiv");
extradiv2.appendChild(resultatas);

let replay = document.createElement("h3");
replay.innerText = "Replay";
replay.classList.add("replay");
let extradiv1 = document.createElement("div");
extradiv1.classList.add("extradiv");
extradiv1.appendChild(replay);

const removeAll = () => {
  for (let i = 0; i < visi.length; i++) {
    visi[i].remove();
  }
};

replay.addEventListener("click", function () {
  let clear = document.querySelectorAll("#selection > div");
  console.log(clear);
  for (let i = 0; i < clear.length; i++) {
    clear[i].remove();
  }
  selection.appendChild(rock);
  selection.appendChild(paper);
  selection.appendChild(scissors);
});

let userInput;
let botPlay;

const botIcon = () => {
  if (botPlay == "rock") {
    let clone = rock.cloneNode(true);
    selection.appendChild(clone);
  } else if (botPlay == "paper") {
    let clone = paper.cloneNode(true);
    selection.appendChild(clone);
  } else if (botPlay == "scissors") {
    let clone = scissors.cloneNode(true);
    selection.appendChild(clone);
  }
};

rock.addEventListener("click", function () {
  removeAll();
  userInput = "rock";
  botCalc();
  resultatas.innerHTML = match();
  let clone = rock.cloneNode(true);
  selection.appendChild(clone);
  botIcon();
  selection.appendChild(extradiv2);
  selection.appendChild(extradiv1);
});
paper.addEventListener("click", function () {
  removeAll();
  userInput = "paper";
  botCalc();
  resultatas.innerHTML = match();
  let clone = paper.cloneNode(true);
  selection.appendChild(clone);
  botIcon();
  selection.appendChild(extradiv2);
  selection.appendChild(extradiv1);
});
scissors.addEventListener("click", function () {
  removeAll();
  userInput = "scissors";
  botCalc();
  resultatas.innerHTML = match();
  let clone = scissors.cloneNode(true);
  selection.appendChild(clone);
  botIcon();
  selection.appendChild(extradiv2);
  selection.appendChild(extradiv1);
});
const match = () => {
  //user input paper scenarios
  if (userInput == "paper") {
    if (botPlay == "paper") {
      return "Draw...";
    } else if (botPlay == "rock") {
      return "Winner!";
    } else if (botPlay == "scissors") {
      return "Looser!";
    }
    //user input rock scenarios
  } else if (userInput == "scissors") {
    if (botPlay == "paper") {
      return "Winner!";
    } else if (botPlay == "rock") {
      return "Looser!";
    } else if (botPlay == "scissors") {
      return "Draw...";
    }
  }
  //user input rock scenarios
  else if (userInput == "rock") {
    if (botPlay == "paper") {
      return "Looser!";
    } else if (botPlay == "rock") {
      return "Draw...";
    } else if (botPlay == "scissors") {
      return "Winner!";
    }
  }
};

const botCalc = () => {
  const botRandom = Math.floor(Math.random() * 3);
  if (botRandom == 0) {
    botPlay = "paper";
  } else if (botRandom == 1) {
    botPlay = "scissors";
  } else if (botRandom == 2) {
    botPlay = "rock";
  }
};

// console.log(userInput, botPlay, match());
