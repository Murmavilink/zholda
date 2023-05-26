const toBook = () => {
    const formItems = document.querySelectorAll('.cards__item');
    const modalParent = document.querySelector('.popups');
    const modal = document.querySelector('.popup__to-book');


    const createObjdata = (element) => {
        const objDate = new Date();
        const idCompany = element.id;
        const dateDay = element.querySelector('.cards__day--active span + span').textContent;
        const date = `${objDate.getFullYear()}-${objDate.getMonth() + 1}-${dateDay}`;
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

        document.querySelector('input[name=date]').value = data.date;
        document.querySelector('input[name=data]').value = JSON.stringify(data);

        console.log(data);
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