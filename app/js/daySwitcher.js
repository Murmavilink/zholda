const daySwitcher = () => {
    const scheduleWrap = document.querySelector('.area-info__schedule-item-calendar');
    const scheduleColumns = document.querySelectorAll('.area-info__schedule-column');
    const arrowBtnRight = document.querySelector('.area-info__arrow-wrap-right');
    const arrowBtnLeft = document.querySelector('.area-info__arrow-wrap-left');

    let count = 0;


    const showBtn = (btn) => {
        btn.style.display = 'flex';
    };
    
    
    const hideBtn = (btn) => {
        btn.style.display = 'none';
    };
    

    const handlerColums = () => {
        let columnCount = 0;

        scheduleColumns.forEach(column => {
            if(!column.classList.contains('hidden')) columnCount++;
        });

        if(columnCount === 15) {
            hideBtn(arrowBtnRight);
        } else if(columnCount > 15) {
            showBtn(arrowBtnRight);
        }
    };


    scheduleWrap.addEventListener('click', (e) => {
        if (e.target.closest('.area-info__arrow-wrap-right')) {
            scheduleColumns[count].classList.add('hidden');

            count++;

            showBtn(arrowBtnLeft);
            handlerColums();
        } else if (e.target.closest('.area-info__arrow-wrap-left')) {
            count--;

            if(count >= 0) {
                scheduleColumns[count].classList.remove('hidden');
            } else {
                count = 0;
                hideBtn(arrowBtnLeft);
            }

            handlerColums();
        }
    });

    
    if(scheduleColumns.length === 14) hideBtn(arrowBtnRight);
};


daySwitcher();