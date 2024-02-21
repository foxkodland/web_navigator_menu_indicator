
const indicator = document.querySelector('.indicator')
let list_li = document.querySelectorAll('.navigator li')
list_li.forEach((li) => {
    li.addEventListener('click', ()=>{
        // убрать у всех .active
        list_li.forEach(function (item){
            item.classList.remove('active');
        })
        // добавить класс .active
        li.classList.add('active');

        // подвинуть индикатор к нажатой кнопке
        let number = li.dataset.number;
        indicator.style.transform = 'translateX(' + (number - 1) * (70 + 20) + "px";
    })
})