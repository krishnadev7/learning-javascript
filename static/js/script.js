// challenge 1 Age In Days
function ageInDays() {
  var birthyear = prompt('What year you were born...???');
  var result = (2021 - birthyear) * 365;
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode('you are ' + result + '  days old');
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
  console.log(result);
}

function reset() {
  document.getElementById('ageInDays').remove();
}
// challenge 2 Cat-Generator
function generateCat(){
  var image=document.createElement('img');
  var div=document.getElementById('flex-cat-gen');
  image.src='https://thecatapi.com/api/images/get?format=src&type=gif&size=small';
  div.appendChild(image);
}
