let left = document.getElementsByClassName('emergency-tasks');
left[0].style.backgroundColor = 'rgb(255, 159, 132)';
let right = document.getElementsByClassName('no-emergency-tasks');
right[0].style.backgroundColor = 'rgb(249, 219, 94)';

let head = document.querySelectorAll('#header-container h1');
head[0].style.backgroundColor = 'rgb(0, 176, 105)';

let leftText = document.querySelectorAll('.emergency-tasks div h3');
leftText[0].style.backgroundColor = 'rgb(165, 0, 243)';
leftText[1].style.backgroundColor = 'rgb(165, 0, 243)';
let rightText = document.querySelectorAll('.no-emergency-tasks div h3');
rightText[0].style.backgroundColor = 'rgb(35, 37, 37)';
rightText[1].style.backgroundColor = 'rgb(35, 37, 37)';
let footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';
