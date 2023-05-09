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
   
function render() {

    if ( myAP < 0 ) {
        myAP = 0
    };
    
    if ( fungusHP < 0 ) {
        fungusHP = 0
    };
    
    // if ( fungusHP === 0 && myAP > 0 ) {
    //     $('#walk').css('.freaky-fungus.dead');
    // } else if ( myAP === 0 && fungusHP > 0 ){
    //     $('#walk').css('.freaky-fungus.jump');
    //     $('#attack-btn').css('disabled');
    // } else {
    // };


    console.log('myAP is now:', myAP);
    console.log('fungusHP is now', fungusHP);
    $('#myAPScore').text(myAP);
    $('#fungusHPScore').text(fungusHP);

}

function scepterAttack() {
    // console.log('scepter!');
    
   
    myAP -= 12;
    fungusHP -= 14;
    
    render();
    // give disabled attribute if myAP === 0
     
} // end scepterAttack function

function entangleAttack() {
    console.log('entangle!');
    myAP -= 23;
    fungusHP -= 9;
    render();
} // end entangleAttack function

function bladeAttack() {
    console.log('blade!');
    myAP -= 38;
    fungusHP -= 47;
    render();
} // end bladeAttack function

function fireAttack(){
    console.log('fire!');
    myAP -= 33;
    fungusHP -= 25;
    render();
} // end fireAttack function