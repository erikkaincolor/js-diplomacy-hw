'use strict';

// When someone clicks the button with the class “color-changer”, 
// all elements with the class “color-change” should turn red (you can do this by adding the class “red” to them).


function handleClick() {
    const group = document.querySelectorAll('.color-change');

    for (const items of group) {
        items.classList.add('red');
        }
}


function formValidation(evt) {
    evt.preventDefault(); // prevent its default behavior 

    const formInput = document.querySelector('#number-input');
    const numInput = Number(formInput.value);

    const formFeedback = document.querySelector('#formFeedback'); //form feedback obj to act on
    if (isNaN(numInput) || numInput >= 10){ // If it is not a number or greater than or equal to 10, 
        formFeedback.innerText='Please enter a smaller number';}
    else {
        formFeedback.innerText='You are good to go!';}

}

document.querySelector('.color-changer').addEventListener('click', handleClick);

document.querySelector('number-form').addEventListener('submit', formValidation); //or form footer

//final notes on last function implementation...

//1
//          formfeedback var needed to have the ID not the class, therefore #
//          AND needed to be correct one. i referenced section id, not submits span id
            //see below
//          <span id="formFeedback" class="bold">   VS   <section class="form-feedback">


//2
//          NO semicolon between conditionals OR after curlys after theyre done...
//          ONLY before ending curly braces..bc its a statement
            //see below
//          formFeedback.innerText='Please enter a smaller number';}



//3
//          needed = sign , not parenS, AND no backticks, needed single qoutes
            //see below
//          formFeedback.innerText(`Please enter a smaller number`)}

//4
//          needed "number-form" class, NOT submit button's, which is what Kat warned us about smh lol
//          AND evtType is SUBMITTTTT not click
            //see below
//          <form class="number-form">

//5
//          no semicolonn after function ends
