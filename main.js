const openModal = document.querySelector('.galeria-port');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('madal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    closeModal.classList.remove('madal--show');
});

// menu

const nav = document.querySelector('.nav');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', this.window.scrollY >0);
   
})


const wave = document.querySelector('.wave');
// const wabeClose = document.querySelector('.')

wave.addEventListener('', (e)=>{
    e.preventDefault();
    modal.classList.add('madal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    closeModal.classList.remove('madal--show');
});


