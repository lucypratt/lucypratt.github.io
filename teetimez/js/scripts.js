const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 2000,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    autoplay: {
      delay: 5000,
    
    },
  
  });
  const hb = document.querySelector('#navButton');
  const pn = document.querySelector('#navList');
  
  hb.addEventListener('click', () => {
      hb.classList.toggle('open');
      pn.classList.toggle('open');
  })

