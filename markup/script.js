const btn = document.getElementById("mobile-menu-button");
const closeMenuBtn = document.getElementById('mobile-menu_button-close');
const menu = document.getElementById("mobile-menu");

btn.onclick = function () {
    if (menu.classList.contains("open")) {
        menu.classList.remove("open")
    } else {
        menu.classList.add("open")
    }
};

closeMenuBtn.onclick = function () {
    menu.classList.remove("open")
};

const cardButtons = document.getElementsByClassName("options-block_cards-select-button");
const cardsBlock = document.getElementsByClassName('options-block_cards')[0];

for (let i = 0; i < cardButtons.length; i++) {
    const btn = cardButtons[i];

    btn.onclick = event => {
        const element = event.currentTarget;
        removeActive();
        element.classList.add('active');
        const target = element.dataset.target;
        const selector = `[data-card="${target}"]`;
        const card = document.querySelector(selector); // card-div
        const shift = -1 * card.offsetLeft;

        cardsBlock.style.transform = `translateX(${shift}px)`;
    }
}

const removeActive = () => {
    for (let i = 0; i < cardButtons.length; i++) {
        const btn = cardButtons[i];
        btn.classList.remove('active');
    }
};

window.onresize = function () {
    cardsBlock.style.transform = `translateX(0)`;
};
