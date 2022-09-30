// let button = document.querySelector('.button')
// button.addEventListener("click", () => {


export const loadData = async () => {
    const response = await fetch('https://test-api.codingbootcamp.cz/api/fb026915/events');
    const data = await response.json();



    console.log("hello");
    // const data = api


    // const artItemElem = document.querySelector('div');
    // artItemElem.innerHTML = '';
    console.log(data[0])




    const listElm = document.querySelector('h1');


    listElm.textContent = data[0].name
    const about = document.querySelector('.about');
    about.textContent = data[0].description
    const img = document.querySelector('.feature');
    img.innerHTML += ` <div><img src="${data[0].image_url}" alt="image" style= "width: 450px; height: auto;"></div>`





    const otherEvents = document.querySelector('.box');

    data.forEach((el) => {
        const eventCard = document.createElement('div')
        eventCard.innerHTML = `
            <h3>${el.name}</h3>
            <button class="btn${el.id}">Register</button>
        `
        eventCard.querySelector('button').addEventListener('click', () => {
            console.log('CLICK from ' + el.id)

        })
        otherEvents.appendChild(eventCard)
    });
}









// let button = document.querySelector('.button')
// button.addEventListener("click", () => {
//     const facts = document.querySelector('.facts')
//     facts.innerHTML += ''

// let name = document.getElementById("name")
// let lname = document.getElementById("lname")
// let email = document.getElementById("email")
// let phone = document.getElementById("phone")
// console.log(name.value)
// console.log(lname.value)


function exportToJSON() {
    const nameinput = document.getElementById("name").value;
    const lastNameinput = document.getElementById("lname").value;
    const emailinput = document.getElementById("email").value;
    const phoneinput = document.getElementById("phone").value;

    const data = {
        Registration:
        {
            Name: nameinput,
            LastName: lastNameinput,
            Email: emailinput,
            Phone: phoneinput
        }
    };
    console.log(data)
}

exportToJSON()