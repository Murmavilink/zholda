const toBook = () => {
    const formItems = document.querySelectorAll('.cards__item');
    const modalParent = document.querySelector('.popups');
    const modal = document.querySelector('.popup__to-book');

    const formatDate = (value) => {
        return value < 10 ?  `0${value}`: value;
    };


    const createObjdata = (element) => {
        const objDate = new Date();
        const idCompany = element.id;
        const dateDay = element.querySelector('.cards__day--active span + span').textContent;
        const date = `${objDate.getFullYear()}-${formatDate(objDate.getMonth() + 1)}-${formatDate(dateDay)}`;
        const checkboxItems = element.querySelectorAll('.cards__place-wrap--active input');

        let countCheckbox = 0;


        checkboxItems.forEach(checkboxItem => {
            if(checkboxItem.checked) countCheckbox++;
        });

        
        const data = {
            company_id: idCompany,
            date: date,
            count: countCheckbox
        };

        document.querySelector('input[type=date]').value = data.date;
        document.querySelector('input[type=hidden]').value = JSON.stringify(data);

        console.log(data.date);
    };



    formItems.forEach(form => {       
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            modalParent.classList.add('act');
            modal.classList.add('act');
            createObjdata(e.target);
        });
    });
 

};


toBook();