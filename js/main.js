let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;



const data = [
    {
        slideImg: `<img id="slideImg" src="image/Slide1.jpg">`,
        titles: `<h1>Nos Produits </h1>`,
        sous_titles: `<p>   sont fabriqués avec des huiles et beurres végétaux non comédogènes alors dites bye-bye
        aux comédons.</p>`,
        btnVoirplus: `<a href="#">voir plus</a>`
    },
    {
        slideImg: `<img id="slideImg" src="image/Slide2.jpg">`,
        titles: `<h1>Le Saviez-vous ? </h1>`,
        sous_titles: `<p>Nous disposons d'une GAMME complète de produits de soins corporels conçue pour révéler la beauté de la peau noire.</p>`,
        btnVoirplus: `<a href="#">voir plus</a>`
    },

    {
        slideImg: `<img id="slideImg" src="image/Slide3.jpg">`,
        titles: `<h1>AllianzNature </h1>`,
        sous_titles: `<p>   Première marque Béninoise de cosmétiques naturels et éthiques avec des savons artisanaux aux formes
        irrégulières et atypiques dotées d'une légère touche artistique.</p>`,
        btnVoirplus: `<a href="#">voir plus</a>`

    },
    {
        slideImg: `<img id="slideImg" src="image/Slide4.jpg">`,
        titles: `<h1>Nos Produits </h1>`,
        sous_titles: `<p>   sont fabriqués avec des huiles et beurres végétaux non comédogènes alors dites bye-bye
        aux comédons.</p>`,
        btnVoirplus: `<a href="#">voir plus</a>`
    },

];

const slideImg = document.getElementById('myImageId')
const titles = document.getElementById('titles')
const sous_titles = document.getElementById('sous_titles')
const btnVoirplus = document.getElementById('btnVoirplus')


let current = 0;
change();
function change() {
    const currentData = data[current]

    slideImg.innerHTML = currentData.slideImg
    titles.innerHTML = currentData.titles
    sous_titles.innerHTML = currentData.sous_titles
    btnVoirplus.innerHTML = currentData.btnVoirplus
}

let len = data.length;
let i = 0;
function sliders() {

    if (i > len - 1) {
        i = 0;
    }
    data[current] = data[i]
    i++;
    change();
    setTimeout('sliders()', 3000)
};




/*
let images = new Array(
    "image/Slide1.jpg",
    "image/Slide2.jpg",
    "image/Slide3.jpg"
);

let len = images.length;
let i = 0;
function sliders() {
    if (i > len - 1) {
        i = 0;
    }
    slideImg.src = images[i]
    i++;
    setTimeout('sliders()', 3000)
};


*/



//when scroll change navabar 

window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('window-scroll', window.scrollY > 0);
})

for (let i = 0; i < sortBtn.length; i++) {
    sortBtn[i].addEventListener('click', function () {
        for (let j = 0; j < sortBtn.length; j++) {
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');


        let targetData = this.getAttribute('data-target');

        for (let k = 0; k < sortItem.length; k++) {
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if (sortItem[k].getAttribute('data-item') == targetData || targetData == "all") {
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}