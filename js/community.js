const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

function switchTabs() {
  const currentTab = document.querySelector('.current-tab');
  currentTab.classList.remove('current-tab');
  this.classList.add('current-tab');

  const currentTabContent = document.querySelector('.current-tab-content');
  const targetTabContent = document.querySelector(this.dataset.tabTarget);
  currentTabContent.classList.remove('current-tab-content');
  targetTabContent.classList.add('current-tab-content');
}

tabs.forEach(tab => tab.addEventListener('click', switchTabs));

const slideshows = document.querySelectorAll('.slideshow');

function changeImage(e) {
  if (!e.target.matches('button')) return;
  const action = e.target.name;
  const images = this.querySelectorAll('img');
  const current = this.querySelector('.current-img');

  current.classList.remove('current-img');
  const nextImage = current[`${action}ElementSibling`];
  const loopTo = action === 'next' ? 0 : images.length - 1;
  if (nextImage) nextImage.classList.add('current-img');
  else images[loopTo].classList.add('current-img');
}

slideshows.forEach(slideshow => slideshow.addEventListener('click', changeImage));
