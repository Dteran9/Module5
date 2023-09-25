const names = ["Deanndra", "Fernando", "Pochito", "Bella", "Seven", "Miso"];

for (name of names) {
    console.log(`Hello, this is ${name}`);
}

let sleeping = 0;

while (sleeping < 100) {
    console.log("The familiy is still sleeping");

    sleeping++;
}

const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

changeColor.addEventListener("click", function() {
    text.classList.toggle("change");
});

const familyList = document.querySelectorAll(".familyName-List li");

console.log(familyList);

for (family of familyList) {
    family.addEventListener("click", function() {
        this.style.color = "green";
    });
}
