// https://www.omnicalculator.com/health/bai

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const yourbodyadiposityindexRadio = document.getElementById('yourbodyadiposityindexRadio');
const yourheightRadio = document.getElementById('yourheightRadio');
const yourhipcircumferenceRadio = document.getElementById('yourhipcircumferenceRadio');

let yourbodyadiposityindex;
let yourheight = v1;
let yourhipcircumference = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

yourbodyadiposityindexRadio.addEventListener('click', function() {
  variable1.textContent = 'Your height';
  variable2.textContent = 'Your hip circumference';
  yourheight = v1;
  yourhipcircumference = v2;
  result.textContent = '';
});

yourheightRadio.addEventListener('click', function() {
  variable1.textContent = 'Your body adiposity index';
  variable2.textContent = 'Your hip circumference';
  yourbodyadiposityindex = v1;
  yourhipcircumference = v2;
  result.textContent = '';
});

yourhipcircumferenceRadio.addEventListener('click', function() {
  variable1.textContent = 'Your body adiposity index';
  variable2.textContent = 'Your height';
  yourbodyadiposityindex = v1;
  yourheight = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(yourbodyadiposityindexRadio.checked)
    result.textContent = `Your body adiposity index = ${computeyourbodyadiposityindex().toFixed(2)}`;

  else if(yourheightRadio.checked)
    result.textContent = `Your height = ${computeyourheight().toFixed(2)}`;

  else if(yourhipcircumferenceRadio.checked)
    result.textContent = `Your hip circumference = ${computeyourhipcircumference().toFixed(2)}`;
})

// calculation

// BAI = (hip circumference/(height)^1.5) - 18

function computeyourbodyadiposityindex() {
  return (Number(yourhipcircumference.value) / Math.pow(Number(yourheight.value), 1.5)) - 18;
}

function computeyourheight() {
  return Math.pow(Number(yourhipcircumference.value), 1 / 1.5) / Math.pow((Number(yourbodyadiposityindex.value) + 18), 1 / 1.5);
}

function computeyourhipcircumference() {
  return (Number(yourbodyadiposityindex.value) + 18)* Math.pow(Number(yourheight.value), 1.5);
}