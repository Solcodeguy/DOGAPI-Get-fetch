'use strict';

function getDogImages(numImg) {

    if (numImg.length === 0) {

        let userInput = 3;
        dogImgPull(userInput);

    } else if (numImg > 50) {
        alert('Pick a number between 1 - 50');

    } else if (numImg < 1) {
        alert('Pick a number between 1 - 50');

    } else {

        let userInput = numImg;
        dogImgPull(userInput);
    }
}

function dogImgPull(userInput) {
    fetch(`https://dog.ceo/api/breeds/image/random/${numImg}`)
        .then(response => response.json())

    .then(responseJson =>

            displayResults(responseJson, numImg))
        .catch(error => alert('Something went wrong. Try again'));
}

function displayResults(responseJson, numImg) {
    console.log(responseJson.message);
    //replace the existing image with the new one(s)
    for (let i = 0; i <
        responseJson.message.length; i++) {
        $('.results').append(`<img src="${responseJson.message[i]}">`);
    };
    //display the results section
    $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let numImg = $('.js-img-input').val();
        $('.results').empty();
        getDogImages(numImg);
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});