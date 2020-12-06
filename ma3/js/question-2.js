// Module Assignment

// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".gameResults");

async function makeApiCall() {

    try {
        const response = await fetch(url);

        const results = await response.json();

        const allGames = results.results;
        console.log(allGames);
        resultsContainer.innerHTML = "";

        for (let i = 0; i < allGames.length; i++) {
            console.log(allGames[i].name);

            if (i == 8) {
                break;
            }

            resultsContainer.innerHTML += `<div class="result"> <h3>Game ${[i + 1]}</h3> Name : ${allGames[i].name} <br> Rating: ${allGames[i].rating} <br> Number of tags: ${allGames[i].tags.length}</div>`;
        }
    }
    catch (error) {
        console.log("An error occured")
        resultsContainer.innerHTML = "An error has occured";
    }


}

makeApiCall();