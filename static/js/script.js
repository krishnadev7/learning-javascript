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
