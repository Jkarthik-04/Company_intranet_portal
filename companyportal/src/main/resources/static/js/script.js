// Portal Status

const timer = document.getElementById("timer");

if (timer) {

    function updateClock() {

        const now = new Date();

        timer.innerHTML =
            "System Online<br>" +
            now.toLocaleDateString() +
            "<br>" +
            now.toLocaleTimeString();

    }

    updateClock();

    setInterval(updateClock, 1000);

}

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});

// Contact Form

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Your request has been submitted successfully.");

        form.reset();

    });

}

// Card Animation

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

// Navbar Shadow

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

    }

    else {

        header.style.boxShadow = "none";

    }

});

console.log("Company Intranet Portal Loaded Successfully.");