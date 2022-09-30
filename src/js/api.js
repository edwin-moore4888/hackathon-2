export const loadData = async () => {
    console.log('loading')
    const response = await fetch('https://test-api.codingbootcamp.cz/api/fb026915/events');
    const data = await response.json();



    // console.log("hello");

    const listElm = document.querySelector('h1');


    listElm.textContent = data[0].name
    const about = document.querySelector('.about');
    about.textContent = data[0].description
    const img = document.querySelector('.feature');
    const imageDiv = document.createElement('div')
    imageDiv.innerHTML = `<img src="${data[0].image_url}" alt="image" style= "width: 450px; height: auto;">`
    img.appendChild(imageDiv)

    const otherEvents = document.querySelector('.box');

    data.forEach((el) => {
        const eventCard = document.createElement('div')
        eventCard.innerHTML = `
            <h3>${el.name}</h3>
            <button class="button${el.id}">Register</button>
        `

        eventCard.querySelector('button').addEventListener('click', () => {
            console.log('CLICK from ' + el.id)
            modal.style.display = 'flex'
        })

        otherEvents.appendChild(eventCard)
    });
}

export const postData = async () => {
    const nameinput = document.getElementById("name").value;
    const lastNameinput = document.getElementById("lname").value;
    const emailinput = document.getElementById("email").value;
    const phoneinput = document.getElementById("phone").value;

    const data = {
        // name: nameinput,
        // lastName: lastNameinput,
        // email: emailinput,
        // phone: phoneinput
        "name": nameinput,
        "date": new Date(),
        "description": emailinput,
        "image_url": phoneinput
    };
    console.log(data)

    const res = await fetch('https://test-api.codingbootcamp.cz/api/fb026915/events', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },

    })
    const statusReport = await res.json()
    // console.log(statusReport)src / js / api.js
}
postData()

let submit = document.querySelector("#submit")
submit.addEventListener('click', async () => {

    const response = await postData()
    console.log(response)
})
