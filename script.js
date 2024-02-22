
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
        indicator.style.transform = 'translateX(' + (number - 1) * (70 + 20) + "px";  // 70 + 20 - это ширина nav item + gap flex

        // удалить класс и почти сразу вернуть - чтобы у circle сработала заново анимация увеличения
        indicator.classList.remove('active');
        setTimeout(function(){indicator.classList.add('active')}, 10);
    })
})