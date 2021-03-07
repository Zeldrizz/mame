const btn = document.querySelector('.congr__content-btn'),
      btn2 = document.querySelector('.btn2'), 
      congr = document.querySelector('.congratulation'),
      text = document.querySelector('.text'),
      text2 = document.querySelector('.text2'),
      secretImg = document.querySelector('.secret__img');

btn.addEventListener('click', function(){
    text.style.display = 'block';
    text2.style.display = 'block';
    congr.style.background = 'pink';
    btn.style.display = 'none';
    btn2.style.display = 'block';
})

btn2.addEventListener('click', function(){
    text.style.display = 'none';
    text2.style.display = 'none';
    congr.style.background = 'black';
    btn.style.display = 'block';
    btn2.style.display = 'none';
})