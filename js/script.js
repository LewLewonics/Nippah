const nav_watching = document.getElementById('watching');
const nav_finished = document.getElementById('finished');

function sort_shows() {
    shows.sort((show1, show2) => {
        if (show1.title > show2.title) {
            return 1;
        } else {
            return -1;
        }
    });
}

function load_shows() {
    shows.forEach(show => {
        document.getElementById('anime-list').innerHTML += `
        <div class="anime-entry ${show.status} ${show.initial_display}">
            <div class="cover-area">
                <div class="anime-cover-container">
                    <a href='${show.anilist}'><img src="${show.image}" alt="" class="anime-cover"></a>
                </div>
            </div>

            <a href='${show.anilist}'><div class="anime-title">${show.title}</div></a>

            <div class="extras">
                <a href="${show.anilist}"><img src="images/anilist_icon.svg" alt="" class="anilist-icon"></a>
                <a href="${show.link}${show.current_episode}" class="episode-count">${show.current_episode}/${show.episodes}</a>
            </div>
        </div>
    `
    });
}

function show_watching()
{
    //Navbar Highlighting
    const watch_list = nav_watching.classList.contains('active');
    if (!watch_list) {
        nav_watching.classList.add('active');
        nav_finished.classList.remove('active');

        //Display shows on watch list
        const watching = document.querySelectorAll('.watching') 

        watching.forEach(show => {
            const inactive = show.classList.contains('inactive');
            if (inactive) {
                show.classList.remove('inactive');
            }
        });
        //Remove shows that are on finished list
        const finished = document.querySelectorAll('.finished') 

        finished.forEach(show => {
            const inactive = show.classList.contains('inactive');
            if (!inactive) {
                show.classList.add('inactive');
            }
        });
        colorize_list();
    }
}

function show_finished()
{
    //Navbar Highlighting
    const finished_list = nav_finished.classList.contains('active');
    if (!finished_list) {
        nav_finished.classList.add('active');
        nav_watching.classList.remove('active');

        //Display shows on finished list
        const finished = document.querySelectorAll('.finished') 

        finished.forEach(show => {
            const inactive = show.classList.contains('inactive');
            if (inactive) {
                show.classList.remove('inactive');
            }
        });
        //Remove shows that are on watching list
        const watching = document.querySelectorAll('.watching') 

        watching.forEach(show => {
            const inactive = show.classList.contains('inactive');
            if (!inactive) {
                show.classList.add('inactive');
            }
        });
        colorize_list();
    }
}    

function colorize_list() {
    const list = document.querySelectorAll('.anime-entry:not(.inactive)');
    for (let i=1; i<list.length+1; i++) {
        if (i % 2 == 0) {
            list[i-1].style.backgroundColor = "var(--color-3)";
        } else {
            list[i-1].style.backgroundColor = "var(--color-4)";
        }
    }
}

nav_watching.addEventListener('click', show_watching);
nav_finished.addEventListener('click', show_finished);

sort_shows();
load_shows();
colorize_list();