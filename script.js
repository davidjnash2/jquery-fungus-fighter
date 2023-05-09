$(document).ready(onReady);

let fungusHP = 100; // declare global variable to set starting value for HP
let myAP = 100; // declare global variable to set starting value for AP



function onReady() { // declare onReady function
    console.log('jQuery ready!');
    $('#scepterButt').on('click', scepterAttack); // event listener to register scepter attack button click
    $('#entangleButt').on('click', entangleAttack); // event listener to register entangle attack button click
    $('#bladeButt').on('click', bladeAttack); // event listener to register blade attack button click
    $('#fireButt').on('click', fireAttack); // event listener to register fire attack button click
}
   
function render() { // declare render function

    if ( myAP < 0 ) { // conditional to set my score to zero if it goes negative
        myAP = 0
    }; // end conditional
    
    if ( fungusHP < 0 ) { // conditional to set fungus score to zero if it goes negative
        fungusHP = 0
    }; // end conditional
    
    console.log('myAP is now:', myAP);
    console.log('fungusHP is now', fungusHP);
    $('#myAPScore').text(myAP);
    $('#fungusHPScore').text(fungusHP);
    $('#ap-meter').val(myAP);
    $('#hp-meter').val(fungusHP);

    // still working on getting this interval/health gain section to work
    // if (fungusHP < 50 ) {
    //     $('#fungusHPScore').setInterval(growFungus, 1000);
    // };

    if ( fungusHP === 0 && myAP > 0 ) { // start conditional to display fight results on DOM
        $('#walk').toggleClass('dead'); // if mushroom loses, it dies
    } else if ( fungusHP > 0 && myAP === 0 ) { // or if I lose
        $('#walk').toggleClass('jump'); //mushroom happy
    }; // end conditional 
} // end render function

// trying to link this function to setInterval line in 
// render function, but can't get to work, so commenting out for now
// function growFungus() {
//     fungusHP++;
// } // end growFungus function

function scepterAttack() {
    // console.log('scepter!');
    myAP -= 12;
    fungusHP -= 14;
    render();
} // end scepterAttack function

function entangleAttack() {
    // console.log('entangle!');
    myAP -= 23;
    fungusHP -= 9;
    render();
} // end entangleAttack function

function bladeAttack() {
    // console.log('blade!');
    myAP -= 38;
    fungusHP -= 47;
    render();
} // end bladeAttack function

function fireAttack(){
    // console.log('fire!');
    myAP -= 33;
    fungusHP -= 25;
    render();
} // end fireAttack function