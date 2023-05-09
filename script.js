$(document).ready(onReady);

let fungusHP = 100; // declare global variable to set starting value for HP
let myAP = 100; // declare global variable to set starting value for AP
// setInterval(growFungus, 1000);


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
    
    console.log('myAP is now:', myAP); // log to test
    console.log('fungusHP is now', fungusHP); // log to test
    $('#myAPScore').text(myAP); // push AP value to DOM
    $('#fungusHPScore').text(fungusHP); // push HP value to DOM
    $('#ap-meter').val(myAP); // set progress bar on DOM to change with AP value
    $('#hp-meter').val(fungusHP); // set progress bar on DOM to change with HP value

    if ( fungusHP === 0 && myAP > 0 ) { // start conditional to display fight results on DOM
        $('#walk').toggleClass('dead'); // if mushroom loses, it dies
    } else if ( fungusHP > myAP && myAP === 0 ) { // or if I lose
        $('#walk').removeClass('walk').addClass('jump');
        $('.attack-btn').prop('disabled', true);
    };

} // end render function


// function growFungus() {
//     if ( fungusHP < 50 && fungusHP !== 0 ){
//     fungusHP+1};
//     render();
// } // end growFungus function








function scepterAttack() { // event handler function for scepter attack button click
    // console.log('scepter!');
    myAP -= 12;
    fungusHP -= 14;
    render(); // update DOM
} // end scepterAttack function

function entangleAttack() { // event handler function for entangle attack button click
    // console.log('entangle!');
    myAP -= 23;
    fungusHP -= 9;
    render(); // update DOM
} // end entangleAttack function

function bladeAttack() { // event handler function for blade attack button click
    // console.log('blade!');
    myAP -= 38;
    fungusHP -= 47;
    render(); // update DOM
} // end bladeAttack function

function fireAttack(){ // event handler function for fire attack button click
    // console.log('fire!');
    myAP -= 33;
    fungusHP -= 25;
    render(); // update DOM
} // end fireAttack function