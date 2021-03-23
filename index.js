let banner1 = document.querySelector('.banner1');
let item1 = document.querySelector('#item1');
let banner2 = document.querySelector('.banner2');
let item2 = document.querySelector('#item2');
let banner3 = document.querySelector('.banner3');
let item3 = document.querySelector('#item3');

var clickHandler1 = function () {
    banner1.style.display = 'grid';
    banner2.style.display = 'none';
    banner3.style.display = 'none';
  }
var clickHandler2 = function () {
    banner1.style.display = 'none';
    banner2.style.display = 'grid';
    banner3.style.display = 'none';
  }
var clickHandler3 = function () {
    banner1.style.display = 'none';
    banner2.style.display = 'none';
    banner3.style.display = 'grid';
  }

  
item1.addEventListener('click', clickHandler1);
item2.addEventListener('click', clickHandler2);
item3.addEventListener('click', clickHandler3)
  

