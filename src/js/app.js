const dropDownNew = document.querySelector('.dropdown_list_new');
const listNew = document.querySelector('.services_items_new');
dropDownNew.addEventListener('click', (e) => {
  if (listNew.classList.contains('services_items__active')) {
    if (e.target.parentElement.classList.contains('arrow_down_new')) {
      listNew.classList.remove('services_items__active');
    }

    if (e.target.classList.contains('arrow_down_new')) {
      listNew.classList.remove('services_items__active');
    }
  } else {
    if (e.target.parentElement.classList.contains('arrow_down_new')) {
      listNew.classList.add('services_items__active');
      e.target.parentElement.classList.add('arrow_up__active');
    }

    if (e.target.classList.contains('arrow_down_new')) {
      listNew.classList.add('services_items__active');
      e.target.classList.add('arrow_up__active');
    }
  }
});

const dropDownExp = document.querySelector('.dropdown_list_exp');
const listExp = document.querySelector('.services_items_exp');
dropDownExp.addEventListener('click', (e) => {
  if (listExp.classList.contains('services_items__active')) {
    if (e.target.parentElement.classList.contains('arrow_down_exp')) {
      listExp.classList.remove('services_items__active');
    }

    if (e.target.classList.contains('arrow_down_exp')) {
      listExp.classList.remove('services_items__active');
    }
  } else {
    if (e.target.parentElement.classList.contains('arrow_down_exp')) {
      listExp.classList.add('services_items__active');
    }

    if (e.target.classList.contains('arrow_down_exp')) {
      listExp.classList.add('services_items__active');
    }
  }
});

const dropDownDiff = document.querySelector('.dropdown_list_diff');
const listDiff = document.querySelector('.services_items_diff');
dropDownDiff.addEventListener('click', (e) => {
  if (listDiff.classList.contains('services_items__active')) {
    if (e.target.parentElement.classList.contains('arrow_down_diff')) {
      listDiff.classList.remove('services_items__active');
    }

    if (e.target.classList.contains('arrow_down_diff')) {
      listDiff.classList.remove('services_items__active');
    }
  } else {
    if (e.target.parentElement.classList.contains('arrow_down_diff')) {
      listDiff.classList.add('services_items__active');
    }

    if (e.target.classList.contains('arrow_down_diff')) {
      listDiff.classList.add('services_items__active');
    }
  }
});
