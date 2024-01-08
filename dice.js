const myBtn = document.getElementById('mybtn');
const myHElements = document.querySelectorAll('.myh'); // Select all elements with class 'myh'

let player_1 = 0;
let player_2 = 0;

myBtn.addEventListener('click', function() {
    myHElements.forEach(function(element) {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        element.innerHTML = randomNumber;
    });
});
