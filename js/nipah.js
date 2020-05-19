let image_container = document.getElementById("images_container");
const num_of_rikas = 20;
let rika_images = [];

function create_array() {
    for (let i=0; i<num_of_rikas; i++) {
        rika_images.push(`nipah${1}.jpg`);
    }
}

function change_images() {
    for (let i=0; i<rika_images.length; i++) {
        image_container.innerHTML += `
            <div class="image-container">
                <img src="images/nipah${1}.jpg" alt="" class="nipah-img">
            </div>
        `;
    }
}

function change_color() {
    let rikas = document.querySelectorAll('.nipah-img');
    rikas.forEach((rika)=> {
        let opacity = Math.random();
        rika.style.opacity = `${opacity}`;
    })
}


create_array();
change_images();

window.setInterval(change_color, 500);
