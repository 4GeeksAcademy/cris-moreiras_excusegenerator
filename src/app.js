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
      "ayer.",
      "hace un mes.",
      "la semana pasada.",
      "el año pasado.",
      "la noche pasada."
    ];

    let whoRandom = getObjectRandom(who);
    let actionRandom = getObjectRandom(action);
    let whatRandom = getObjectRandom(what);
    let whenRandom = getObjectRandom(when);

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

  function getObjectRandom(myArray) {
    return Math.floor(Math.random() * myArray.length);
  }

  document.querySelector("#excuse").innerHTML = excuseGenerator();

  let refresh = document.getElementById("refresh");
  refresh.addEventListener("click", _ => {
    location.reload();
  });
};
