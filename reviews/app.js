const reviews = [{
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fringilla elementum rutrum. Aliquam rutrum eleifend aliquet. Aenean non lacinia ex, id auctor purus. Fusce vestibulum mauris a nisl pulvinar venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
},
{
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://cdn-icons-png.flaticon.com/256/4139/4139951.png",
    text: "Morbi euismod imperdiet odio eget semper. Donec eu dignissim massa. Sed a quam nec ipsum laoreet rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce consectetur euismod magna. Morbi eu lacus sit amet augue interdum condimentum sed nec velit.",
},
{
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://cdn-icons-png.flaticon.com/512/4139/4139981.png",
    text: "Proin non porta quam, non accumsan ipsum. Integer egestas tellus eu neque posuere semper. Praesent sit amet pharetra risus. Nulla tempor ligula eget lorem tempus aliquet. Donec ac venenatis lectus. Praesent ac rutrum eros. Etiam ultrices hendrerit efficitur. Quisque a arcu sollicitudin, maximus dui vitae, rutrum ex.",
},
{
    id: 4,
    name: "billie anderson",
    job: "the boss",
    img: "https://cdn-icons-png.flaticon.com/512/4140/4140042.png",
    text: "Etiam metus ante, pretium at quam sit amet, commodo interdum turpis. Quisque porta leo a dictum tincidunt. Nullam augue mi, hendrerit vitae libero id, consectetur ultricies lectus. Maecenas vel felis eu tellus sodales consectetur. In in sapien tincidunt, viverra arcu a, cursus odio.",
}
]

//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function() {
    showPerson();
});

//show person based on item

function showPerson() {     //current item is a global item so i dont have to give it as an argument
    const item = reviews[currentItem];      //we directly accessed 'currentItem'
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person

nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
})

// show prev person

prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})

// show random person
randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson();
})