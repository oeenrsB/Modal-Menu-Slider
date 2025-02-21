const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');


// Show nav
toggle.addEventListener('click', () => 
    document.body.classList.toggle('show-nav')
);


// Show model
open.addEventListener('click', () =>
    modal.classList.add('show-modal')
);

// close modal
close.addEventListener('click', () => 
    modal.classList.remove('show-modal')
);


// Hide modal 
window.addEventListener('click', e =>
    e.target === modal ? modal.classList.remove('show-modal') : false
);


// window.addEventListener('click', e => {
//     if (modal.contains(e.target)) return; // Click inside modal
//     modal.classList.remove('show-modal'); // Click outside modal
// });




















