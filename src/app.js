/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let excuseGenerator = () => {
    let who = ["Mi perro", "Mi gato", "Mi hermana", "Mi jefa", "Mi suegra"];
    let action = ["se comió", "se llevó", "escondió", "regaló", "rompió"];
    let what = [
      "mi tarea",
      "mi coche",
      "mi movil",
      "mi ordenador",
      "mis gafas"
    ];
    let when = [
      "ayer",
      "hace un mes",
      "la semana pasada",
      "el año pasado",
      "la noche pasada"
    ];

    let whoRandom = getObjectrandom(who);
    let actionRandom = getObjectrandom(action);
    let whatRandom = getObjectrandom(what);
    let whenRandom = getObjectrandom(when);

    return (
      who[whoRandom] +
      " " +
      action[actionRandom] +
      " " +
      what[whatRandom] +
      " " +
      when[whenRandom]
    );
  };

  function getObjectrandom(myArray) {
    return Math.floor(Math.random() * myArray.length);
  }

  document.querySelector("#excuse").innerHTML = excuseGenerator();
};
