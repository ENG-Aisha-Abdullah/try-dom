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
});

body.appendChild(container);