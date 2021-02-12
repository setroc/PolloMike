"use strict";

var borrar = document.querySelector("#borrar");
borrar.addEventListener('click', function () {
  localStorage.clear();
});