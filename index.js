const nav = document.getElementById('nav')
const navToggle = document.getElementById('nav-toggle')
const body = document.body;
navToggle.addEventListener('click', toggleNav)

// function toggleNav() {
//     let ariaExpanded = nav.getAttribute('aria-expanded')
//     ariaExpanded == 'true' ? nav.setAttribute('aria-expanded', 'false') : nav.setAttribute('aria-expanded', 'true')
// }

function toggleNav(event) {
    // Stop the event propagation to prevent it from reaching the document click listener
    event.stopPropagation();

    let ariaExpanded = nav.getAttribute('aria-expanded');
    ariaExpanded == 'true' ? nav.setAttribute('aria-expanded', 'false') : nav.setAttribute('aria-expanded', 'true');
}

// Add an event listener to close the navigation when clicking outside
document.addEventListener('click', e => {
    if (!nav.contains(e.target) && nav.getAttribute('aria-expanded') === 'true') {
        nav.setAttribute('aria-expanded', 'false');
    }

});

