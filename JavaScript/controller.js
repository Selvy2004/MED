import { data, colors } from "./data.js";
import photosView from "./views/photosView.js";
import middlePhotosView from "./views/middlePhotosView.js";
import collectionView from "./views/collectionView.js";

collectionView.render(data, colors);

const mainResultData = function (id) {
  const mainData = data.find(obj => obj.id === id);
  return mainData;
}

const loadMainResult = function () {
  const id = window.location.hash.slice(1);
  if (!id) return;
  const mainData = mainResultData(id);

  if (!mainData) return;
  photosView.render(mainData);
};

const init = function () {
  collectionView.eventHandler(loadMainResult);
  photosView.eventHandler();

}
init();



// Dark mode
const darkBtn = document.querySelector('.moon-btn');
let theme = localStorage.getItem('theme') || 'light';

darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.querySelector('.logo-light').classList.toggle('hidden');
  document.querySelector('.logo-dark').classList.toggle('hidden');
  document.querySelector('.moon-icon').classList.toggle('moon-fill');
  document.body.classList.contains('dark-mode') ? theme = 'dark' : theme = 'light';
  localStorage.setItem('theme', theme);
});

window.addEventListener('load', () => {
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelector('.moon-icon').classList.add('moon-fill');
    return;
  };
});

// Related to Media-query

// Open and Close Navigation
const navList = document.querySelector('.right-navs-list');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const navBtns = document.querySelectorAll('.nav-btn');
const overlay = document.querySelector('.overlay');

const closeMenuFun = function () {
  navList.style.display = 'none';
  openMenu.classList.remove('hidden');
  closeMenu.classList.add('hidden');
  overlay.classList.add('hidden');
};

if (window.innerWidth <= 1100) {

  closeMenuFun()
  // navBtns.forEach(btn => btn.style.backgroundColor = 'var(--white-color)');
}

openMenu.addEventListener('click', function () {
  navList.style.display = 'flex';
  this.classList.add('hidden');
  closeMenu.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

closeMenu.addEventListener('click', closeMenuFun);
window.addEventListener('click', function (e) {
  if (window.innerWidth > 1100 || closeMenu.classList.contains('hidden') || e.target.closest('.open-menu')) return;
  const pressNavList = e.target.closest('.right-navs-list');
  if (pressNavList) return;
  closeMenuFun();
});
