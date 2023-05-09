const tabs = () => {
    
const cardsItems = document.querySelectorAll('.cards__item');
const tabsParent = document.querySelector('.tabs');
const tabBtns = document.querySelectorAll('.tabs__top-btn');
const tabContents = document.querySelectorAll('.tabs__content-item');


let dateItems;
let contentItems;
let cardsItem;
let count = 0;



const removeClassActive = (items, itemActiveClass, contents, contentActiveClass) => {
    for (let i = 0; i < contents.length; i++) {
        items[i].classList.remove(itemActiveClass);

        contents[i].classList.remove(contentActiveClass);
    }
};


const addClassActive = (item, proporty, activeClass, contentActiveClass, tabsStatus) => {
    const dataId = item.dataset[proporty];

    let content;

    if(tabsStatus) {
        content = tabsParent.querySelector(`[data-id="${dataId}"]`);
    } else {
        content = cardsItem.querySelector(`[data-id="${dataId}"]`);
    }

    item.classList.add(activeClass);
    content.classList.add(contentActiveClass);
};



const overwritingElements = (parentElement) => {
    cardsItem = parentElement;

    dateItems = parentElement.querySelectorAll('.cards__day');
    contentItems = parentElement.querySelectorAll('.cards__place-wrap');
};


const showBtn = (className) => {
    cardsItem.querySelector(className).style.display = 'flex';
};


const hideBtn = (className) => {
    cardsItem.querySelector(className).style.display = 'none';
};


const countDay = () => {
    let dateCount = 0;
    

    dateItems.forEach(date => {
        if(date.classList.contains('hidden')) dateCount++;
    });


    if(Math.abs(dateCount - dateItems.length) == 8) {
        hideBtn('.cards__circle-arrow-right');
    }

    return dateCount;
};


cardsItems.forEach(item => {

    item.addEventListener('click', (e) => {
    
        if(e.target.closest('.cards__circle-arrow-right')) {
            overwritingElements(item);
            count = countDay();

            if (count >= 0) showBtn('.cards__circle-arrow-left');
            
            dateItems[count].classList.add('hidden');
        } else if(e.target.closest('.cards__circle-arrow-left')) {
            overwritingElements(item);
            count = countDay();
            
            count--;

            count >= 0 ? dateItems[count].classList.remove('hidden') : hideBtn('.cards__circle-arrow-left');

            showBtn('.cards__circle-arrow-right');
        } else if(e.target.closest('.cards__day')) {
            overwritingElements(item);

            removeClassActive(dateItems, 'cards__day--active', contentItems, 'cards__place-wrap--active');
            addClassActive(e.target.closest('.cards__day'), 'day', 'cards__day--active', 'cards__place-wrap--active');
        } else if(e.target.closest('.cards__place-btn input')) {
            e.target.closest('.cards__place-btn').classList.toggle('cards__place-btn--active');
        }

    });

});


tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        removeClassActive(tabBtns, 'tabs__top-btn--active', tabContents, 'tabs__content-item--active');
        addClassActive(btn, 'item', 'tabs__top-btn--active', 'tabs__content-item--active', true);
    });
});

};

tabs();