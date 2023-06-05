/* Aplicando Evento de click para transformar tema Dark em Light */
const changeTheme = document.querySelector(".checkbox");

changeTheme.addEventListener("click", () => {
    const elements = document.querySelectorAll("body, header, .header__branding, .header__title, .header__followers, .header__dark-mode-label, .header__dark-mode-switch, .checkbox, .card, .card__username, .card__followers, .card__followers-label, .overview-section__title, .card__label, .card__value");

    Array.from(elements).forEach((element) => {
        element.classList.toggle("light");
    })
})