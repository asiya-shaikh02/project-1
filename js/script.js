openLoginFromSignup.addEventListener("click", () => {
    signupModal.classList.remove("show");

    setTimeout(() => {
        signupModal.style.display = "none";
        loginModal.style.display = "flex";

        setTimeout(() => {
            loginModal.classList.add("show");
        }, 10);
    }, 250);
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.style.display = "flex";

    setTimeout(() => {
        loginModal.classList.add("show");
    }, 10);
});

closeLogin.addEventListener("click", () => {
    loginModal.classList.remove("show");

    setTimeout(() => {
        loginModal.style.display = "none";
    }, 250);
});

loginModal.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove("show");

        setTimeout(() => {
            loginModal.style.display = "none";
        }, 250);
    }
});




// Open signup
signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signupModal.style.display = "flex";

    setTimeout(() => {
        signupModal.classList.add("show");
    }, 10);
});

closeSignup.addEventListener("click", () => {
    signupModal.classList.remove("show");

    setTimeout(() => {
        signupModal.style.display = "none";
    }, 250);
});

signupModal.addEventListener("click", (e) => {
    if (e.target === signupModal) {
        signupModal.classList.remove("show");

        setTimeout(() => {
            signupModal.style.display = "none";
        }, 250);
    }
});
const addRestaurant = document.querySelector(".add-restaurant");

if (addRestaurant) {
    addRestaurant.addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.add("clicked");

        setTimeout(() => {
            window.location.href = this.href;
        }, 400); // subtle pause
    });
}
