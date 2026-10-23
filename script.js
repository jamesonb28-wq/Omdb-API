async function getMovies() {
    try {
        // 1. Get the search term from the search box, 
        const searchTerm = document.getElementById("search").value
       console.log(searchTerm)

        //          send a request to the ombd (USING YOUR API KEY)
        const url = "https://www.omdbapi.com/?&apikey=3581de11&s=" + searchTerm;
        //          decode the response as JSON
        const response = await fetch(url)


       const json = await response.json();


       console.log(JSON.stringify(json));


        

        const movieHolder = document.getElementById("movieHolder");

        for (movie of json.Search) {
            //  Create a div to hold each image and title 
              let divContainer = document.createElement('div');
            //  Give the div the css class of CARD
             divContainer.classList.add("card")
            // Create an image element
            let img = document.createElement('img');
            //      point it to the image from this movie     
             img.src = movie.Poster;
           img.width = 100;
       


            // Create a CONTAINER div to hold the title and year.
            let card = document.createElement('div')
            // Give the CONTAINER div the style of container
card.classList.add('container')
            let titleHeader = document.createElement("h3");
            titleHeader.textContent = movie.Title + ": " + movie.Year
            card.appendChild(titleHeader)
            // Add the CONTAINER to the CARD
             divContainer.appendChild(img);
            divContainer.appendChild(card)
            // Add all the elements to the movieHolder element
            movieHolder.appendChild(divContainer)
        }


    }
    catch (error) {
        console.log(error)
    }
}
