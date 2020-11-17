// MOVEMOENT ANIMATION TO HAPPEN
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// ITEMS
const title = document.querySelector('.info h1');
const product = document.querySelector('.product img');
const purchase = document.querySelector('.purchase ');
const description = document.querySelector('.info h3')
const quantity = document.querySelector('.quantity');
const actbtn = document.querySelector('.quantity button')

// MOVING ANIMATIION EVENT
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

// ANIMATE IN
container.addEventListener('mouseenter', (e) => {
    card.style.transition = `none`;
    // POPOUT
    title.style.transform = 'translateZ(150px)';
    product.style.transform = 'translateZ(200px) rotateZ(-360deg)';
    description.style.transform = 'translateZ(125px)';
    quantity.style.transform = 'translateZ(100px)';
    purchase.style.transform = 'translateZ(75px)';
})

// ANIMATE OUT
container.addEventListener('mouseleave', (e) => {
    card.style.transition = `all 0.5s ease`
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // POPBACK
    title.style.transform = 'translateZ(0px)';
    product.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    quantity.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
})

// ACTIVE BUTTON ANIMATION
actbtn.addEventListener('click', (e)=>{
    actbtn.classList.add('active');
})
