
function getStartedClick() {
    var isName = true
    while (isName === true) {
        var name = prompt(`Welcome to TOCOZ, before starting write your name here : `)
        if (name.length !== 0) {
            alert(`Hy ${name.toUpperCase()}, thank you for letting us know your name `)
            window.open('tocoz.html')
            isName = false;
        } else {
            alert('Sorry, you need to write your name before starting. Please try again!')
            if (confirm('Try Again Here!')) {

            } else {
                isName = false;
            }
        }
    }
}


var date = new Date()
var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
}
var today = date.toLocaleDateString('en-US', options);
document.getElementById('date').innerHTML = today
if (date.getDay() === 0 || date.getDay() === 6) {
    document.getElementById('dateNote').innerHTML = `Yeaahhh, it's a weekend. No working today!`
} else {
    document.getElementById('dateNote').innerHTML = `It's still a weekday . It's time to working `
}

//TODOLIST TOOL
const inputValue = document.getElementById('inputValue');
const addButton = document.getElementById('addButton');
const listItems = document.getElementById('listItems');


var newItems = ''
var deleteItems = `<button onclick="myFunction()"> <i class="fas fa-trash-alt"></i></button>`
addButton.addEventListener('click', function () {
    var paragraph = document.createElement('P');
    var items = inputValue.value;
    if (items !== "") {

        newItems = paragraph.innerHTML = `<li id='newList'>${items}  ${deleteItems}</li>`
        listItems.appendChild(paragraph);

    } else {
        alert(`you haven't write any list`)
    }
})
function myFunction() {
    document.getElementById('newList').remove();

}





