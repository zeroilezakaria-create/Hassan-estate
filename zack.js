const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 120;

        if(current < target){

            counter.innerText = Math.ceil(current + increment);

            setTimeout(update,20);

        }else{

            counter.innerText = target + "+";

        }

    }

    update();

});
function searchProperty() {

    let city = document.getElementById("city").value.toLowerCase().trim();
    let type = document.getElementById("type").value;
    let price = document.getElementById("price").value;

    // Villa Casablanca
    if (
        city === "casablanca" &&
        type === "villa" &&
        price === "850000"
    ) {
        window.location.href = "villa1.html";
    }

    // Penthouse Marrakech
    else if (
        city === "marrakech" &&
        type === "penthouse" &&
        price === "620000"
    ) {
        window.location.href = "villa2.html";
    }

    // House Rabat
    else if (
        city === "rabat" &&
        type === "house" &&
        price === "1150000"
    ) {
        window.location.href = "villa3.html";
    }

    else {
        alert("No property found.");
    }

}

