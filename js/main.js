const tabItem = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add('tab-border');
  // grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}

function removeBorder() {
  tabItem.forEach((item) => item.classList.remove('tab-border'));
}

function removeShow() {
  tabContentItem.forEach((item) => item.classList.remove('show'));
}

// Listen for tab click
tabItem.forEach((item) => item.addEventListener('click', selectItem));

// remove the show class from each tab
