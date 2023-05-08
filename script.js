$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let myAP = 100;

function onReady() {
    console.log('jQuery ready!');
    $('#scepterButt').on('click', scepterAttack);
    $('#entangleButt').on('click', entangleAttack);
    $('#bladeButt').on('click', bladeAttack);
    $('#fireButt').on('click', fireAttack);


    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function scepterAttack() {
    console.log('scepter!');
    // myAP -= 12;
    // fungusHP -= 14;
}

function entangleAttack() {
    console.log('entangle!');
    myAP -= 23;
    fungusHP -= 9;
    

}

function bladeAttack() {
    console.log('blade!');
    myAP -= 38;
    fungusHP -= 47
    
}

function fireAttack(){
    console.log('fire!');
    myAP -= 33;
    fungusHP -= 25;
}