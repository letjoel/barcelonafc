import {players} from './data.js';

//Variables ===================
const returnArea = document.querySelector('#ReturnArea')

//Events ===================
document.addEventListener('DOMContentLoaded', showPlayers);

//Functions ===================

function showPlayers() {
    players.forEach( player => {

    const playerHTML = document.createElement('p');
    playerHTML.textContent = `
        ${player.name} | ${player.age} | ${player.position} | ${player.nationality} | ${player.contract} | $${player.marketValue}M
    
    `;

    //inserting html
    returnArea.appendChild(playerHTML);

    })
}