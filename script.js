document.addEventListener('DOMContentLoaded', () => {
    const movieGrid = document.querySelector('.movie-grid');
   const moviesData = 
   [
    {
        "title": "Pushpa 3",
        "genre": "Action, Thriller",
        "releaseDate": "December 20, 2025",
        "poster": "https://i.ytimg.com/vi/iCUTfml3aVs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAkgfsnBBu8WPHfnbzgnbvWsTkHUg",
        "hero": "Allu Arjun",
        "heroine": "Rashmika Mandanna",
        "villains": "Fahadh Faasil",
        "director": "Sukumar",
        "about": "Pushpa's empire expands in this high-octane sequel, with Allu Arjun delivering a gritty performance and intense face-offs with Fahadh Faasil."
    },
    {
        "title": "Salaar: Part 2",
        "genre": "Action, Drama",
        "releaseDate": "August 15, 2025",
        "poster": "https://i.ytimg.com/vi/rktIL_9JgTQ/maxresdefault.jpg",
        "hero": "Prabhas",
        "heroine": "Shruti Haasan",
        "villains": "Jagapathi Babu",
        "director": "Prashanth Neel",
        "about": "The action-packed continuation of Salaar explores deeper conflicts and dynamic visuals under Prashanth Neel’s gritty direction."
    },
    {
        "title": "Devara",
        "genre": "Action, Political",
        "releaseDate": "October 10, 2025",
        "poster": "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-113587323/113587323.jpg",
        "hero": "Jr. NTR",
        "heroine": "Janhvi Kapoor",
        "villains": "Saif Ali Khan",
        "director": "Koratala Siva",
        "about": "A political thriller that marks the explosive clash between Jr. NTR and Saif Ali Khan in a gripping power struggle."
    },
    {
        "title": "Kalki 2898 AD",
        "genre": "Sci-Fi, Mythology",
        "releaseDate": "September 30, 2025",
        "poster": "https://i.ytimg.com/vi/kQDd1AhGIHk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA7K8NxHmn4zrDMUb1THh3EJh7x-w",
        "hero": "Prabhas",
        "heroine": "Deepika Padukone",
        "villains": "Kamal Haasan",
        "director": "Nag Ashwin",
        "about": "A grand mythological sci-fi saga set in the future, blending cutting-edge visuals with Indian epics."
    },
    {
        "title": "Hanuman",
        "genre": "Fantasy, Adventure",
        "releaseDate": "July 22, 2025",
        "poster": "https://i.ytimg.com/vi/5qQCT7GEKNs/maxresdefault.jpg",
        "hero": "Teja Sajja",
        "heroine": "Amritha Aiyer",
        "villains": "Vinay Rai",
        "director": "Prasanth Varma",
        "about": "A superhero adventure rooted in Indian mythology, showcasing the power of Hanuman in a visually rich fantasy world."
    },
    {
        "title": "Goodachari 2",
        "genre": "Spy, Thriller",
        "releaseDate": "November 5, 2025",
        "poster": "https://i.ytimg.com/vi/UmXizWpXOuQ/maxresdefault.jpg",
        "hero": "Adivi Sesh",
        "heroine": "Unknown",
        "villains": "Classified",
        "director": "Vinay Kumar Sirigineedi",
        "about": "A high-stakes espionage thriller following Agent Gopi on a global mission filled with secrets, suspense, and smart tech."
    },
    {
        "title": "Thandel",
        "genre": "Romantic, Drama",
        "releaseDate": "October 25, 2025",
        "poster": "https://assets-in.bmscdn.com/discovery-catalog/events/et00384012-qrjbprnqzk-landscape.jpg",
        "hero": "Naga Chaitanya",
        "heroine": "Sai Pallavi",
        "villains": "To be revealed",
        "director": "Chandoo Mondeti",
        "about": "A soulful love story set against the coastal backdrop, highlighting strong emotions and cultural elements."
    },
    {
        "title": "Game Changer",
        "genre": "Political, Thriller",
        "releaseDate": "August 28, 2025",
        "poster": "https://orunewculture.com/wp-content/uploads/2024/12/maxresdefault-3-1024x576.jpg",
        "hero": "Ram Charan",
        "heroine": "Kiara Advani",
        "villains": "SJ Suryah",
        "director": "Shankar",
        "about": "A powerful political thriller by Shankar where Ram Charan takes on the corrupt system in a massy, high-tech style."
    }
]

;


  function loadMovies(moviesToDisplay) {
    movieGrid.innerHTML = '';
    moviesToDisplay.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img  style="width:600px ; hight:600px;" src="${movie.poster}" alt="${movie.title} Poster">
            <h3>${movie.title}</h3>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
            <p><strong>Hero:</strong> ${movie.hero}</p>
            <p><strong>Heroine:</strong> ${movie.heroine}</p>
            <p><strong>Villains:</strong> ${movie.villains}</p>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>about:</strong> ${movie.about}</p>
        `;
        movieGrid.appendChild(movieCard);
    });
}
    loadMovies(moviesData);

    // --- Dynamic News Loading ---
    const newsGrid = document.querySelector('.news-grid');
    const newsData = [
        {
            title: "Pushpa 3 Officially Announced!",
            content: "Allu Arjun returns with fiery intensity in Pushpa 3. Expect bigger action, deeper drama, and new enemies.",
            date: "June 27, 2025"
        },
        {
            title: "Devara Trailer Drops Soon!",
            content: "Fans of Jr. NTR are in for a treat as the trailer for Koratala Siva's Devara is expected next month.",
            date: "June 25, 2025"
        }
    ];

    function loadNews(newsToDisplay) {
        newsGrid.innerHTML = '';
        newsToDisplay.forEach(news => {
            const newsItem = document.createElement('article');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `
                <h3>${news.title}</h3>
                <p>${news.content}</p>
                <span>Date: ${news.date}</span>
            `;
            newsGrid.appendChild(newsItem);
        });
    }

    loadNews(newsData);

    // --- Dynamic Roles Loading ---
    const rolesGrid = document.querySelector('.roles-grid');
    const rolesData = [
        {
            name: "Allu Arjun",
            role: "Lead Actor",
            bio: "Known for his electrifying performances and unique dance style. Leads the Pushpa franchise.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgX6gk0vaAZP4twlnXOAeuDSl1tjdvpiHJDQ&s"
        },
        {
            name: "Rashmika Mandanna",
            role: "Lead Actress",
            bio: "Star of multiple blockbusters, Rashmika brings charm and power to the screen.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNiutzWtIsBzeue8jKlzoGhj4wfWDsMG_SQQ&s"
        },
        {
            name: "Prabhas",
            role: "Action Star",
            bio: "The face of pan-India cinema, known for Baahubali, Salaar, and upcoming sci-fi projects.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Prabhas_at_Saaho_Pre_release_event_%28cropped%29.jpg/330px-Prabhas_at_Saaho_Pre_release_event_%28cropped%29.jpg"
        },
        {
            name: "Sukumar",
            role: "Director",
            bio: "Creative mind behind the Pushpa series, known for emotional depth and raw storytelling.",
            image: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/sukumar-bandreddi-2278-1671448479.jpg"
        }
    ];

    function loadRoles(rolesToDisplay) {
        rolesGrid.innerHTML = '';
        rolesToDisplay.forEach(role => {
            const roleCard = document.createElement('div');
            roleCard.classList.add('role-card');
            roleCard.innerHTML = `
                <img
  src="${role.image}"
  alt="${role.name}"
  width="600"
  height="600"
  style="width:200px; height:200px;"
>

                <h3 style="color:red">${role.name}</h3>
                <p><strong>Role:</strong> ${role.role}</p>
                <p><strong>Bio:</strong> ${role.bio}</p>
            `;
            rolesGrid.appendChild(roleCard);
        });
    }

    loadRoles(rolesData);

    // --- Search Functionality ---
    const movieSearchInput = document.getElementById('movie-search');
    window.searchMovies = function () {
        const searchTerm = movieSearchInput.value.toLowerCase();
        const filteredMovies = moviesData.filter(movie =>
            movie.title.toLowerCase().includes(searchTerm) ||
            movie.genre.toLowerCase().includes(searchTerm) ||
            movie.releaseDate.toLowerCase().includes(searchTerm)
        );
        loadMovies(filteredMovies);
    };

    // --- Smooth Scrolling for Navigation ---
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
