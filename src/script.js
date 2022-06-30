const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const galleryImgs = document.querySelectorAll('.gallery-img');

if (window.innerWidth > 721) {

    galleryImgs[0].src = 'image-gallery-milkbottles.eb681d86.jpg';
    galleryImgs[1].src = 'image-gallery-orange.2de0efcb.jpg';
    galleryImgs[2].src = 'image-gallery-cone.5fc87d40.jpg';
    galleryImgs[3].src = 'image-gallery-sugarcubes.ab4195d8.jpg';

}

navToggle.addEventListener('click', () => {
    const attribute = nav.getAttribute('data-visible');
    if (attribute === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true)
    } else {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false)
    }
})


