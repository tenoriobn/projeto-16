const changeTheme = document.querySelector(".checkbox");

changeTheme.addEventListener("click", () => {
    const body = document.querySelector("body");
    const header = document.querySelector("header");

    body.classList.toggle("light")
    header.classList.toggle("light")
})