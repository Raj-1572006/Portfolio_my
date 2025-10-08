let btn = document.getElementById("btn");
let form = document.getElementById("info1");
btn.addEventListener("click",(event)=>{
    event.preventDefault();
    alert("Thank you for contacting me 😊. i have to work on backend");
    form.reset();
});
