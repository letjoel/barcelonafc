import {players} from './data.js';

//Variables ===================

//Selects
const name = document.querySelector('#playerName');
const minAge = document.querySelector('#playerMinAge');
const maxAge = document.querySelector('#playerMaxAge');
const position = document.querySelector('#playerPosition');
const nationality = document.querySelector('#playerNationality');
const contract = document.querySelector('#playerContract');
const marketMinValue = document.querySelector('#playerMinMarketValue');
const marketMaxValue = document.querySelector('#playerMaxMarketValue');

//Container for results
const result = document.querySelector('#ReturnArea')

//Filter contract
const contractYearsArray = [];

players.forEach( player => {
    contractYearsArray.push(player.contract);
})

const maxContractYear = Math.max(...contractYearsArray);
const minContractYear = Math.min(...contractYearsArray);

//Filter Age

const ageArray = [];

players.forEach( player => {
    ageArray.push(player.age);
})

const maximumAge = Math.max(...ageArray);
const minimumAge = Math.min(...ageArray);

//Filter nationality

const nationalityArray = [];

players.forEach(player => {
    if (!nationalityArray.includes(player.nationality)) {
        nationalityArray.push(player.nationality);
    }
})

//Filter Market Values

const marketValueArray = [];

players.forEach( player => {
    marketValueArray.push(player.marketValue);
})


const minMarketValue = Math.min(...marketValueArray);
const maxMarketValue = Math.max(...marketValueArray);
const minimumMarketValue = Math.floor(minMarketValue);
const maximumMarketValue = Math.ceil(maxMarketValue);




//Search Object
const dataSearch = {
    name: '',
    minAge: '',
    maxAge: '',
    position: '',
    nationality: '',
    contract: '',
    marketMinValue: '',
    marketMaxValue: ''
}



//Events ===================
document.addEventListener('DOMContentLoaded', () => {
    
    showPlayers(players);
    fillSelectName();
    fillSelectMinAge();
    fillSelectMaxAge();
    fillSelectNationality();
    fillSelectContract();
    fillSelectMinMarketValue();
    fillSelectMaxMarketValue();
})

//Event Listeners
name.addEventListener('change', e => {
    dataSearch.name = e.target.value;
    filterPlayers();
})
minAge.addEventListener('change', e => {
    dataSearch.minAge = parseInt(e.target.value);
    filterPlayers();
})
maxAge.addEventListener('change', e => {
    dataSearch.maxAge = parseInt(e.target.value);
    filterPlayers();
})
position.addEventListener('change', e => {
    dataSearch.position = e.target.value;
    filterPlayers();
})
nationality.addEventListener('change', e => {
    dataSearch.nationality = e.target.value;
    filterPlayers();
})
contract.addEventListener('change', e => {
    dataSearch.contract = parseInt(e.target.value);
    filterPlayers();
})
marketMinValue.addEventListener('change', e => {
    dataSearch.marketMinValue = parseInt(e.target.value);
    filterPlayers();
})
marketMaxValue.addEventListener('change', e => {
    dataSearch.marketMaxValue = parseInt(e.target.value);
    filterPlayers();
})

//Functions ===================

function cleanHTML() {
    
    const container = document.querySelector('#ReturnArea');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function noResult() {
    cleanHTML();

    const noResult = document.createElement('div');
    noResult.classList.add('alert','error');
    noResult.appendChild(document.createTextNode('No results'));
    document.querySelector('#ReturnArea').appendChild(noResult);
}

function fillSelectContract(){
    for (let y = maxContractYear; y >= minContractYear; y--) {       
        const option = document.createElement('option');
        option.value = y;
        option.textContent = y;
        contract.appendChild(option);              
    }
}

function fillSelectName(){
    for (let i = 0; i < players.length; i++) {       
        const option = document.createElement('option');
        option.value = players[i].name;
        option.textContent = players[i].name;
        name.appendChild(option);              
    }
}

function fillSelectMinAge(){
    for (let y = minimumAge; y <= maximumAge; y++) {       
        const option = document.createElement('option');
        option.value = y;
        option.textContent = y;
        minAge.appendChild(option);              
    }
}
function fillSelectMaxAge(){
    for (let y = maximumAge; y >= minimumAge; y--) {       
        const option = document.createElement('option');
        option.value = y;
        option.textContent = y;
        maxAge.appendChild(option);              
    }
}
function fillSelectNationality(){
    for (let i = 0; i < nationalityArray.length; i++) {       
        const option = document.createElement('option');
        option.value = nationalityArray[i];
        option.textContent = nationalityArray[i];
        nationality.appendChild(option);              
    }
}
function fillSelectMinMarketValue(){      
    for (let y = minimumMarketValue; y <= maximumMarketValue; y++) { 
        const option = document.createElement('option');
        option.value = y;
        option.textContent = y;
        marketMinValue.appendChild(option);              
    }
}
function fillSelectMaxMarketValue(){
    for (let y = maximumMarketValue; y >= minimumMarketValue; y--) { 
        const option = document.createElement('option');
        option.value = y;
        option.textContent = y;
        marketMaxValue.appendChild(option);              
    }
}
function filterName(player){
    if (dataSearch.name) {
        return player.name === dataSearch.name;
    }
    return player;   
}
function filterContract(player){
    if (dataSearch.contract) {
        return player.contract === dataSearch.contract;
    }
    return player;   
}
function filterMinAge(player){
    if (dataSearch.minAge) {
        return player.age >= dataSearch.minAge;
    }
    return player;   
}
function filterMaxAge(player){
    if (dataSearch.maxAge) {
        return player.age <= dataSearch.maxAge;
    }
    return player;   
}
function filterNationality(player){
    if (dataSearch.nationality) {
        return player.nationality === dataSearch.nationality;
    }
    return player;   
}
function filterMinMarketValue(player){
    if (dataSearch.marketMinValue) {
        return player.marketValue >= dataSearch.marketMinValue;
    }
    return player;   
}
function filterMaxMarketValue(player){
    if (dataSearch.marketMaxValue) {
        return player.marketValue <= dataSearch.marketMaxValue;
    }
    return player;   
}
function filterPosition(player){
        if (dataSearch.position) {
        return player.position === dataSearch.position;
    }
    return player;
}
function showPlayers(players) {
    cleanHTML();

    const container = document.querySelector('#ReturnArea');
    console.log(players);
    players.forEach(player => {
    const playerHTML = document.createElement('p');
    playerHTML.innerHTML = `
       <p> ${player.name} | ${player.age} | ${player.position} | ${player.nationality} | ${player.contract} | $${player.marketValue}M</p>
    `;

    //inserting html
    container.appendChild(playerHTML);

    })
}
function filterPlayers(){
    const resultFiltered = players.filter(filterName).filter(filterContract).filter(filterPosition).filter(filterMinAge).filter(filterMaxAge).filter(filterNationality).filter(filterMinMarketValue).filter(filterMaxMarketValue);
    console.log(resultFiltered);
    
    if(resultFiltered.length){
        showPlayers(resultFiltered);
    }else{
        noResult();
    }
    
}