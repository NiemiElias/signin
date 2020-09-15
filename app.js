'use strict';

submit.onclick = function() {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    const tiedot = document.querySelector("#tiedot");

    tiedot.innerHTML = `${username} ${password}`;
    
    return false;
}