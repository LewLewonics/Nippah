let image_container = document.getElementById("images-container");
let num_of_rikas = 10;
let rika_images = [];

function create_array(num_of_rikas) {
    
}

function change_images() {
    for (let i=0; i<rika_images.length; i++) {
        image_container.innerHTML += `
        <div class="cover-area">
            <div class="image-container">
                <img src="rika${i+1}.jpg" alt="" class="anime-cover">
            </div>
        </div>
        `;
    }
}



