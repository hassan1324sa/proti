let links = document.querySelectorAll("a");
links.forEach(function (ele) {
    ele.onclick = function () {
        // Remove Active Class From All Elements
        links.forEach(function (ele) {
            ele.classList.remove("active");
        });
        // Add Active Class To This Element
        this.classList.add("active");
    };
});
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let men1 = document.getElementById("men1")
let men2 = document.getElementById("men2")
btn1.onclick = () => {
    btn1.style.display = 'none'
    btn2.style.display = 'flex'
    men2.style.display = 'flex'
}
btn2.onclick = () => {
    btn2.style.display = 'none'
    btn1.style.display = 'flex'
    men2.style.display = 'none'
}