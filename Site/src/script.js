document.addEventListener('DOMContentLoaded', () => {

    const select = document.getElementById('parameters');
    let selectParameter = select.value;
    select.addEventListener('change', (event) => {
        selectParameter = event.target.value;
    })

    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('keydown', (event) => {

        if (event.key === 'Enter') {
            event.preventDefault();

            const searchInput = searchBar.value;
            const library = document.querySelector('.library');

            library.innerHTML = null;

            if (searchInput !== '') {
                fetchApi(`http://localhost:8080/library/${selectParameter}/${searchInput}`);
            } else {
                /*Construtor Padrão*/
            }
        }
    })

    const btnCircles = document.querySelectorAll('.btn-circle');
    btnCircles.forEach(element => {
        element.addEventListener('click', () => {
            if (element.classList.contains('selected-circle')) {

                element.classList.remove('selected-circle');

            } else {
                element.classList.add('selected-circle');   
            }
        })
    })

    const stars = document.querySelectorAll('.fa-star');
    stars.forEach(element => {
        element.addEventListener('click', () => {
            const value = parseInt(element.getAttribute('data-value'));
            starValue(value);
        })
    })

    
})

async function fetchApi(urn) {
    try {
        
        const response = await fetch(urn);

        if (!response.ok) {
            throw new Error("Error upon fetching the resource");
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error(error);
    }
}

function starValue(value) {
    switch (value) {
        case 1:
            console.log(value);
            const star1 = document.getElementById('star-1');
            if (star1.classList.contains('selected-star')) {
                star1.classList.remove('selected-star');
            } else {
                star1.classList.add('selected-star');
            }
            break;
    
        case 2:
            console.log(value);
            const star2 = document.getElementById('star-2');
            if (star2.classList.contains('selected-star')) {
                star2.classList.remove('selected-star');
            } else {
                star2.classList.add('selected-star');
            }
            break;

        case 3:
            console.log(value);
            break;

        case 4:
            console.log(value);
            break;

        case 5:
            console.log(value);
            break;

        default:
            break;
    }
}