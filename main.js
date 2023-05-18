const toggle = document.querySelector('#toggleDarkMode');
const stars = document.querySelector('#stars');
const moon = document.querySelector('#moon');
const sky = document.querySelector('#sky');
const sun = document.querySelector('#sun');
const sunAura = document.querySelector('#sun-aura');
const sunOutterArea = document.querySelector('#sun-outter-aura');

const higherDune = document.querySelector('#higherSlope');
const middleDune = document.querySelector('#middleSlope');
const littleDune = document.querySelector('#littleSlope');
let darkMode = true;

document.documentElement.style.color = '#f7f7f7';
document.documentElement.style.background = '#2A2A2A';

toggle.addEventListener('click', () => {
  if (darkMode) {
    moon.classList.add('moonLeave');
    stars.classList.add('starsLeave');
    sky.classList.add('sun-sky');
    sun.classList.add('sun');
    sunAura.classList.add('sun-aura');
    sunOutterArea.classList.add('sun-outter-aura');

    higherDune.classList.add('higherSlope');
    middleDune.classList.add('middleSlope');
    littleDune.classList.add('littleSlope');
    [higherDune, middleDune, littleDune].forEach((el) => {
      el.style.removeProperty('fill');
      el.style.removeProperty('stroke');
    });
    toggle.textContent = 'Dark mode OFF';
    darkMode = !darkMode;

    sun.classList.remove('sun-down');
    sunAura.classList.remove('sun-aura-down');
    sunOutterArea.classList.remove('sun-outter-aura-down');
    sky.classList.remove('sun-sky-down');
    moon.classList.remove('moonEnter');
    stars.classList.remove('starsEnter');

    document.documentElement.style.color = '#2A2A2A';
    document.documentElement.style.background = '#f7f7f7';
  } else {
    darkMode = !darkMode;
    sky.classList.remove('sun-sky');
    sun.classList.remove('sun');
    sunAura.classList.remove('sun-aura');
    sunOutterArea.classList.remove('sun-outter-aura');
    moon.classList.remove('moonLeave');
    stars.classList.remove('starsLeave');

    moon.classList.add('moonEnter');
    stars.classList.add('starsEnter');

    sky.classList.add('sun-sky-down');
    sun.classList.add('sun-down');
    sunAura.classList.add('sun-aura-down');
    sunOutterArea.classList.add('sun-outter-aura-down');

    [higherDune, middleDune, littleDune].forEach((el) => {
      el.style.fill = 'none';
      el.style.stroke = 'black';
    });
    toggle.textContent = 'Dark mode ON';
    document.documentElement.style.color = '#f7f7f7';
    document.documentElement.style.background = '#2A2A2A';
  }
});
