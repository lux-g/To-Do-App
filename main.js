//Display Date function
function myDate() {
    const now = new Date();
    const displayDay = document.querySelector('.today');
    const displayMonth = document.querySelector('.month');
    const displayDate = document.querySelector('.date-num');

    //Full day name
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = now.getDay();
    displayDay.innerText = `${days[today]}, `;

    //Full month name
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const currentMonth = now.getMonth();
    displayMonth.innerText = `${months[currentMonth]} `;

    //Number date
    const currentDate = now.getDate();
    displayDate.innerText = currentDate;
}
myDate();


const btnIcon = document.querySelector('.btn-icon');
const inputTodo = document.querySelector('.input-todo');
const todoList = document.querySelector('.todo-list');
const audio = document.querySelector('.sound');

btnIcon.addEventListener('click', () => {
    event.preventDefault();

    //If statement
    if (inputTodo.value === '') {
        alert('Please enter a task');

    } else {
        //Create todo DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        todoList.appendChild(todoDiv);

        //Create new LI
        const newLi = document.createElement('li');
        newLi.classList.add('list-items');
        todoDiv.appendChild(newLi);
        newLi.innerHTML = inputTodo.value;
        inputTodo.value = '';

        //Create Check Button 
        const checkBtn = document.createElement('button');
        checkBtn.classList.add('check-btn');
        todoDiv.appendChild(checkBtn);
        checkBtn.innerHTML = '<i class="fas fa-check"></i>';

        //Create Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        todoDiv.appendChild(deleteBtn);
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

        //Check button eventlistener
        checkBtn.addEventListener('click', () => {
            newLi.classList.toggle('task-complete');
            checkBtn.classList.toggle('check-color');
            todoDiv.classList.toggle('fade');

            if (newLi.classList.contains('task-complete')) {
                audio.currentTime = 0;
                audio.play();
            }
        });

        //Delete button evenlistener
        deleteBtn.addEventListener('click', () => {
            newLi.parentElement.remove();
        });
    };
});

//Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navbarLinks = document.querySelector('.navbar-links');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    navbarLinks.classList.toggle('display-navlinks')
})



//SET BACKGROUND IMAGE
const imageArray = ['./images/1401575.jpg', './images/1401661.jpg']
const allImages = document.querySelectorAll('.pic');


allImages.forEach((img => img.addEventListener('click', function (e) {
    //console.log(e.target);
    console.log(this);
    body.style.backgroundImage = "url(" + this.src + ")";
})));

