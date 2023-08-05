const item4 = $('#featured-item-4');
const item5 = $('#featured-item-5');
const asideHero = $("#aside-hero");
const underHero = $("#under-hero")

function checkWindowSize() {
    if (window.innerWidth > 960) {
        item4.appendTo(asideHero);
        item5.appendTo(asideHero);

    } else {
        item4.appendTo(underHero);
        item5.appendTo(underHero);
    }
}

window.addEventListener("load", checkWindowSize);

window.addEventListener("resize", checkWindowSize);