const myForm = document.getElementById("form");


myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const dateValue = document.getElementById("date").value;
    const event = document.getElementById("event").value;
    localStorage.setItem("getEvent", event);
    localStorage.setItem("v1", dateValue);
    console.log("submitted", dateValue , event);

    window.location.href="counter.html";
    
})


