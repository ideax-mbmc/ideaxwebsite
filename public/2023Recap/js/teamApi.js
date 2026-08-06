
const teamArea = document.querySelector('.team-members');

url = "../js/teams.json";
fetch(url)
    .then((response) => {
        return response.json();
    }).then((data) => {
        for (i = 0; i < data.length; i++) {
            let teamCard = document.createElement("div");
            teamCard.classList.add('team-card', data[i].category);

            teamCard.innerHTML = `
                <img src="${data[i].img}" alt="${data[i].name}" class="profile-img ${data[i].class}">
                <h2 class="team-name">${data[i].name}</h2>
                <p class="team-depart">${data[i].depart}</p>
                <a href="${data[i].social}" class="team-social-link"><i class="fa-brands fa-${data[i].socialType}"></i></a>
                `;
            teamArea.appendChild(teamCard);
        }
    })


// Filter the Team Members
function filterProduct(value) {
    //select all cards
    let elements = document.querySelectorAll(".team-card");
    let buttons = document.querySelector('.buttons');
    buttons.classList.add('buttons-hide');
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}
