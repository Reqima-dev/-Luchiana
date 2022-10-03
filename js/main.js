

let index = 0;
let a = 0;
let sliderNew = document.getElementsByClassName('sliderN');
let line = document.getElementsByClassName('line');

auto();

function show(n) {
    for (a = 0; a < sliderNew.length; a++) { //slider.lenght=4
        sliderNew[a].style.display = 'none'
    }
    for (a = 0; a < line.length; a++) { //line.lenght=4
        line[a].className = line[a].className.replace("active");
    }

    sliderNew[n - 1].style.display = ("block");
    line[n - 1].className += " active"; // add space
}

function auto() {
    index++;
    if (index > sliderNew.length) {
        index = 1;
    }
    show(index);
    setTimeout(auto, 4000); //4secondes
}

function plusSlide(n) {
    index += n;
    if (index > sliderNew.length) {
        index = 1;
    }
    if (index < 1) {
        index = sliderNew.length
    }
    show(index)
}

function currentSlide(n) {
    index = n;
    show(index)
}



//when scroll change navabar 

window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('window-scroll', window.scrollY > 0);
})

// FILTER GAMME PRODUCTS */
let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;


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

// Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // RESPONSIVE BREAKPOINTS

    breakpoints: {
        // when windows width is > = 600px

        600: {
            slidesPerView: 2,
        },
        // when windows width is > = 1024px

        1024: {
            slidesPerView: 3,
        }

    }
});

