let students = [
    {
        name: "sara",
        age: 20,
        url: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
        name: "reem",
        age: 25,
        url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
        name: "norah",
        age: 22,
        url: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
]

let body = document.body
let container = document.createElement("div")
container.style.textAlign = "center"

students.forEach(currentvalue => {
    let images = document.createElement("img");
    images.src = currentvalue.url;
    images.style.width = "200px";
    images.style.height = "200px";
    images.style.borderRadius = "10px";
    images.style.margin = "0.5rem"
    container.appendChild(images);
    let stName = document.createElement("h1");
    stName.innerText = currentvalue.name;
    container.appendChild(stName);
    let stAge = document.createElement("h3");
    stAge.textContent = currentvalue.age;
    container.appendChild(stAge);


});

body.appendChild(container);


// add new object to srudents Arry ..
let newStudent = {
    name: "hi",
    age: 22,
    url: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1200"
};
students.push(newStudent);

let newImg = document.createElement("img");
newImg.src = newStudent.url;
newImg.style.width = "200px";
newImg.style.height = "200px";
newImg.style.borderRadius = "10px";
newImg.style.margin = "0.5rem";
container.appendChild(newImg);
let stName = document.createElement("h1");
stName.innerText = newStudent.name;
container.appendChild(stName);
let stAge = document.createElement("h3");
stAge.textContent = newStudent.age;
container.appendChild(stAge);

// change first name ..
let firstHeading = document.querySelector("h1");
firstHeading.innerText = "sara abdullah";

// change age by indext number ..
let stNchanged = document.querySelectorAll("h3");
stNchanged[0].textContent = 30;
stNchanged[1].textContent = 23;
stNchanged[2].textContent = 19;

