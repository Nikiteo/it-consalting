const dropDownNew = document.querySelector('.dropdown_list_new');
const listNew = document.querySelector('.services_items_new');
const arrowUp = document.querySelector('.arrow_up_new');
const arrowDown = document.querySelector('.arrow_down_new');
dropDownNew.addEventListener('click', (e) => {
  if (listNew.classList.contains('services_items__active')) {
    if (e.target.parentElement.classList.contains('arrow_up_new')) {
      listNew.classList.remove('services_items__active');
      e.target.parentElement.classList.add('hidden');
      e.target.parentElement.classList.remove('show');
      arrowDown.classList.remove('hidden');
    }

    if (e.target.classList.contains('arrow_up_new')) {
      listNew.classList.remove('services_items__active');
      e.target.classList.add('hidden');
      e.target.classList.remove('show');
      arrowDown.classList.remove('hidden');
    }
  } else {
    if (e.target.parentElement.classList.contains('arrow_down_new')) {
      listNew.classList.add('services_items__active');
      e.target.parentElement.classList.add('hidden');
      arrowUp.classList.remove('hidden');
      arrowUp.classList.add('show');
    }

    if (e.target.classList.contains('arrow_down_new')) {
      listNew.classList.add('services_items__active');
      e.target.classList.add('hidden');
      arrowUp.classList.add('show');
      arrowUp.classList.remove('hidden');
    }
  }
});

const dropDownExp = document.querySelector('.dropdown_list_exp');
const listExp = document.querySelector('.services_items_exp');
const arrowUpExp = document.querySelector('.arrow_up_exp');
const arrowDownExp = document.querySelector('.arrow_down_exp');
dropDownExp.addEventListener('click', (e) => {
  if (listExp.classList.contains('services_items__active')) {
    if (e.target.parentElement.classList.contains('arrow_up_exp')) {
      listExp.classList.remove('services_items__active');
      e.target.parentElement.classList.add('hidden');
      e.target.parentElement.classList.remove('show');
      arrowDownExp.classList.remove('hidden');
    }

    if (e.target.classList.contains('arrow_up_exp')) {
      listExp.classList.remove('services_items__active');
      e.target.classList.add('hidden');
      e.target.classList.remove('show');
      arrowDownExp.classList.remove('hidden');
    }
  } else {
    if (e.target.parentElement.classList.contains('arrow_down_exp')) {
      listExp.classList.add('services_items__active');
      e.target.parentElement.classList.add('hidden');
      arrowUpExp.classList.remove('hidden');
      arrowUpExp.classList.add('show');
    }

    if (e.target.classList.contains('arrow_down_exp')) {
      listExp.classList.add('services_items__active');
      e.target.classList.add('hidden');
      arrowUpExp.classList.add('show');
      arrowUpExp.classList.remove('hidden');
    }
  }
});

const dropDownDiff = document.querySelector('.dropdown_list_diff');
const listDiff = document.querySelector('.services_items_diff');
const arrowUpDiff = document.querySelector('.arrow_up_diff');
const arrowDownDiff = document.querySelector('.arrow_down_diff');
dropDownDiff.addEventListener('click', (e) => {
  if (listDiff.classList.contains('services_items__active')) {
    if (e.target.parentElement.classList.contains('arrow_up_diff')) {
      listDiff.classList.remove('services_items__active');
      e.target.parentElement.classList.add('hidden');
      e.target.parentElement.classList.remove('show');
      arrowDownDiff.classList.remove('hidden');
    }

    if (e.target.classList.contains('arrow_up_diff')) {
      listDiff.classList.remove('services_items__active');
      e.target.classList.add('hidden');
      e.target.classList.remove('show');
      arrowDownDiff.classList.remove('hidden');
    }
  } else {
    if (e.target.parentElement.classList.contains('arrow_down_diff')) {
      listDiff.classList.add('services_items__active');
      e.target.parentElement.classList.add('hidden');
      arrowUpDiff.classList.remove('hidden');
      arrowUpDiff.classList.add('show');
    }

    if (e.target.classList.contains('arrow_down_diff')) {
      listDiff.classList.add('services_items__active');
      e.target.classList.add('hidden');
      arrowUpDiff.classList.add('show');
      arrowUpDiff.classList.remove('hidden');
    }
  }
});

const burgerBtnOpen = document.querySelector('.header_burger_link');
const burgerBtnClose = document.querySelector('.modal_burger_link');
const modalWindow = document.querySelector('.modal_menu_burger');
const modalItems = document.querySelectorAll('.modal_menu_item');

burgerBtnOpen.addEventListener('click', (e) => {
  e.preventDefault();
  modalWindow.classList.add('modal_menu_burger_active');
  for (let i = 0; i < modalItems.length; i += 1) {
    modalItems[i].classList.add('modal_menu_item_active');
  }
  burgerBtnOpen.classList.add('hide');
  document.body.style.overflow = 'hidden';
});

burgerBtnClose.addEventListener('click', (e) => {
  e.preventDefault();
  modalWindow.classList.remove('modal_menu_burger_active');
  for (let i = 0; i < modalItems.length; i += 1) {
    modalItems[i].classList.remove('modal_menu_item_active');
  }
  burgerBtnOpen.classList.remove('hide');
  document.body.style.overflow = 'auto';
});
