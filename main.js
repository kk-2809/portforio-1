'use strict';


{
  window.addEventListener('scroll', function(){
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const boxes = document.querySelectorAll('.explanations');
  
    boxes.forEach(function(box) {
      const distanceToBox = box.offsetTop;
      if(scroll + windowHeight > distanceToBox) {
        box.classList.add('explanations-active');
      }
    });
  });
}  


//吹き出し
{
window.addEventListener('scroll', function(){
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;
  const boxes = document.querySelectorAll('.square');

  boxes.forEach(function(box) {
    const distanceToBox = box.offsetTop;
    if(scroll + windowHeight > distanceToBox) {
      box.classList.add('square-active');
    }
  });
});
}


//cafe


//詳細ボタン

{
  const btn3 = document.querySelector('.btn3');
  const mask = document.querySelector('.mask');
  const modal = document.querySelector('.modal');
  const batsu = document.querySelector('.batsu');

    btn3.addEventListener('click', () => {
      mask.classList.remove('hidden');
      modal.classList.remove('hidden');
      batsu.classList.remove('hidden');
    });

    batsu.addEventListener('click', () => {
      mask.classList.add('hidden');
      modal.classList.add('hidden');
      batsu.classList.add('hidden');
    });
}

{
  const btn5 = document.querySelector('.btn5');
  const mask5 = document.querySelector('.mask5');
  const modal5 = document.querySelector('.modal5');
  const batsu5 = document.querySelector('.batsu5');

    btn5.addEventListener('click', () => {
      mask5.classList.remove('hidden');
      modal5.classList.remove('hidden');
      batsu5.classList.remove('hidden');
    });

    batsu5.addEventListener('click', () => {
      mask5.classList.add('hidden');
      modal5.classList.add('hidden');
      batsu5.classList.add('hidden');
    });
}


{
  const btn4 = document.querySelector('.btn4');
  const mask4 = document.querySelector('.mask4');
  const modal4 = document.querySelector('.modal4');
  const batsu4 = document.querySelector('.batsu4');

    btn4.addEventListener('click', () => {
      mask4.classList.remove('hidden');
      modal4.classList.remove('hidden');
      batsu4.classList.remove('hidden');
    });

    batsu4.addEventListener('click', () => {
      mask4.classList.add('hidden');
      modal4.classList.add('hidden');
      batsu4.classList.add('hidden');
    });
}

{
  const btn6 = document.querySelector('.btn6');
  const mask6 = document.querySelector('.mask6');
  const modal6 = document.querySelector('.modal6');
  const batsu6 = document.querySelector('.batsu6');

    btn6.addEventListener('click', () => {
      mask6.classList.remove('hidden');
      modal6.classList.remove('hidden');
      batsu6.classList.remove('hidden');
    });

    batsu6.addEventListener('click', () => {
      mask6.classList.add('hidden');
      modal6.classList.add('hidden');
      batsu6.classList.add('hidden');
    });
}

{
  const btn7 = document.querySelector('.btn7');
  const mask7 = document.querySelector('.mask7');
  const modal7 = document.querySelector('.modal7');
  const batsu7 = document.querySelector('.batsu7');

    btn7.addEventListener('click', () => {
      mask7.classList.remove('hidden');
      modal7.classList.remove('hidden');
      batsu7.classList.remove('hidden');
    });

    batsu7.addEventListener('click', () => {
      mask7.classList.add('hidden');
      modal7.classList.add('hidden');
      batsu7.classList.add('hidden');
    });
}

{
  const btn8 = document.querySelector('.btn8');
  const mask8 = document.querySelector('.mask8');
  const modal8 = document.querySelector('.modal8');
  const batsu8 = document.querySelector('.batsu8');

    btn8.addEventListener('click', () => {
      mask8.classList.remove('hidden');
      modal8.classList.remove('hidden');
      batsu8.classList.remove('hidden');
    });

    batsu8.addEventListener('click', () => {
      mask8.classList.add('hidden');
      modal8.classList.add('hidden');
      batsu8.classList.add('hidden');
    });
}

{
  const btn9 = document.querySelector('.btn9');
  const mask9 = document.querySelector('.mask9');
  const modal9 = document.querySelector('.modal9');
  const batsu9 = document.querySelector('.batsu9');

    btn9.addEventListener('click', () => {
      mask9.classList.remove('hidden');
      modal9.classList.remove('hidden');
      batsu9.classList.remove('hidden');
    });

    batsu9.addEventListener('click', () => {
      mask9.classList.add('hidden');
      modal9.classList.add('hidden');
      batsu9.classList.add('hidden');
    });
}

{
  const btn10 = document.querySelector('.btn10');
  const mask10 = document.querySelector('.mask10');
  const modal10 = document.querySelector('.modal10');
  const batsu10 = document.querySelector('.batsu10');

    btn10.addEventListener('click', () => {
      mask10.classList.remove('hidden');
      modal10.classList.remove('hidden');
      batsu10.classList.remove('hidden');
    });

    batsu10.addEventListener('click', () => {
      mask10.classList.add('hidden');
      modal10.classList.add('hidden');
      batsu10.classList.add('hidden');
    });
}



//問い合わせ
{
  window.addEventListener('scroll', function(){
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const boxes = document.querySelectorAll('footer');
  
    boxes.forEach(function(box) {
      const distanceToBox = box.offsetTop;
      if(scroll + windowHeight > distanceToBox) {
        box.classList.add('footer-active');
      }
    });
  });
}  


//矢印
{
const button = document.querySelector('.to-pagetop');

button.addEventListener('click', () => {
  window.scroll({ 
    top: 0, 
    behavior: "smooth"
  });
});

window.addEventListener('scroll', () => {
  if(window.scrollY > 100){
    button.classList.add('is-shown');
  }else{
    button.classList.remove('is-shown');
  }
});
}


