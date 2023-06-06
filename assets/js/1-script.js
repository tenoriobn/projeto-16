/* Aplicando Evento de click para transformar tema Dark em Light */
const changeTheme = document.querySelector(".checkbox");

changeTheme.addEventListener("click", () => {
    const elements = document.querySelectorAll("body, header, .header__branding, .header__title, .header__followers, .header__dark-mode-label, .header__dark-mode-switch, .checkbox, .card, .card__username, .card__followers, .card__followers-label, .overview-section__title, .card__label, .card__value");

    Array.from(elements).forEach((element) => {
        element.classList.toggle("light");
    })
})

function createCard() {
    const cardSection = document.querySelector(".card-section");

    fetch('./assets/js/card-section.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const { title, info: { username, followers, count } } = item;

            const article = document.createElement('article');
            article.classList.add('card', title.toLowerCase());

            const cardInfo = document.createElement('div');
            cardInfo.classList.add('card__info')

            const cardIcon = document.createElement('span');
            cardIcon.classList.add('card__icon', item.info.iconsocial);

            const cardUserName = document.createElement('p');
            cardUserName.classList.add('card__username')
            cardUserName.textContent = `${username}`;

            const cardFollowers = document.createElement('h3');
            cardFollowers.classList.add('card__followers');
            cardFollowers.textContent = `${followers}`;

            const CardfollowersLabel = document.createElement('p');
            CardfollowersLabel.classList.add('card__followers-label');
            CardfollowersLabel.textContent = "followers";

            const cardToday = document.createElement('div');
            cardToday.classList.add('card__today');

            const cardIconCount = document.createElement('span');
            cardIconCount.classList.add('card__icon', item.info.iconcount);

            const cardTodayCount = document.createElement('h3');
            cardTodayCount.classList.add('card__today-count', item.info.countcolor);
            cardTodayCount.textContent = `${count} Today`;

            cardSection.appendChild(article);
            article.appendChild(cardInfo);

            cardInfo.appendChild(cardIcon);
            cardInfo.appendChild(cardUserName);

            article.appendChild(cardFollowers);
            article.appendChild(CardfollowersLabel);

            article.appendChild(cardToday);
            cardToday.appendChild(cardIconCount);
            cardToday.appendChild(cardTodayCount);
        })
    })
}

createCard();

/*
    ANTES DE PROSSEGUIR COM O RESTO O IDIEL É APLICAR O EVENTO DE DARK/LIGHT
    ** Talvez criar uma lista de objetos com nome de cada tag que recebera a classe `light`
        torne o processo de adicionar e remover a classe `light` mais simples. **
*/

/* 
    1º Se tratando do `iconsocial` em vez de colocar o nome do icon `icon-facebook.svg`
        - É mais simples colocar o nome da classe `icon-facebook` que vai tá carregando o background `icon-facebook.svg`.
    2º A mesma coisa vale para o `iconcount´ que carrega a imagem do `icon-up.svg` ou `icon-down.svg`
        Criar duas classes a `up` e `down` que vai carregar o background-imagem `icon-up.svg` ou `icon-down.svg`.
*/


/* 
    1º Cada um dos 4 `article` além da classe `card` vai receber a classe de acordo com a rede social
        - Assim é possível aplicar o border-top com a cor ideal e iniciar o objeto com o nome da rede social.
        - Seguindo assim, as outras propriedades.
    2º Em relação aos `cards` do `Overview` podemos nomear no objeto encurtando o nome das redes, ex: face, ytb, tw..
*/