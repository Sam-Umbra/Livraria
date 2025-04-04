document.addEventListener('DOMContentLoaded', () => {

    const library = document.querySelector('.library');
    /*library.innerHTML = null;*/
    fetchApi(`books`);

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

            library.innerHTML = null;

            if (searchInput !== '') {
                fetchApi(`${selectParameter}/${searchInput}`);
            } else {
                /*Construtor Padrão*/
                fetchApi('books');
            }
        }
    })

    const btnCircles = document.querySelectorAll('.btn-circle');
    btnCircles.forEach(element => {
        element.addEventListener('click', () => {

            if (element.classList.contains('selected-circle')) {

                element.classList.remove('selected-circle');

                library.innerHTML = null;
                fetchApi('books');

            } else {
                btnCircles.forEach(circle => {
                    circle.classList.remove('selected-circle');
                })

                let param1 = element.getAttribute('data-param-1');
                let param2 = element.getAttribute('data-param-2');

                console.log(param1, param2);
                element.classList.add('selected-circle');

                library.innerHTML = null;
                fetchApi(`price?firstPrice=${param1}&secondPrice=${param2}`);
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

    const priceFields = document.querySelectorAll('.price-field');
    priceFields.forEach(element => {

        element.addEventListener('keydown', (event) => {

            if (event.key === 'Enter') {
                event.preventDefault();
                
                library.innerHTML = null;
                
                betweenPrices();
            }

        })
    })

    const categories = document.querySelectorAll('.category');
    categories.forEach(element => {
        let category = element.innerHTML;
        element.addEventListener('click', () => {

            if (element.classList.contains('selected-category')) {
                element.classList.remove('selected-category');
                
                library.innerHTML = null;
                fetchApi('books');
            } else {
                categories.forEach(c => {
                    c.classList.remove('selected-category');
                })
                element.classList.add('selected-category');

                library.innerHTML = null;
                fetchApi(`category/${category}`)
            }
        })
    })
    
})

async function fetchApi(uri) {
    try {
        
        const response = await fetch(`http://localhost:8080/library/${uri}`);

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

    const star1 = document.getElementById('star-1');
    const star2 = document.getElementById('star-2');
    const star3 = document.getElementById('star-3');
    const star4 = document.getElementById('star-4');
    const star5 = document.getElementById('star-5');

    switch (value) {
        case 1:
            if (star1.classList.contains('selected-star')) {
                star1.classList.remove('selected-star');
                star2.classList.remove('selected-star');
                star3.classList.remove('selected-star');
                star4.classList.remove('selected-star');
                star5.classList.remove('selected-star');
                
                library.innerHTML = null;
                fetchApi('books');
            } else {
                star1.classList.add('selected-star');
                
                library.innerHTML = null;
                fetchApi(`evaluation/${value}`);
            }
            break;
    
        case 2:
            if (star2.classList.contains('selected-star')) {
                star1.classList.remove('selected-star');
                star2.classList.remove('selected-star');
                star3.classList.remove('selected-star');
                star4.classList.remove('selected-star');
                star5.classList.remove('selected-star');

                library.innerHTML = null;
                fetchApi('books');
            } else {
                star1.classList.add('selected-star');
                star2.classList.add('selected-star');
                
                library.innerHTML = null;
                fetchApi(`evaluation/${value}`);
            }
            break;

        case 3:
            if (star3.classList.contains('selected-star')) {
                star1.classList.remove('selected-star');
                star2.classList.remove('selected-star');
                star3.classList.remove('selected-star');
                star4.classList.remove('selected-star');
                star5.classList.remove('selected-star');

                library.innerHTML = null;
                fetchApi('books');
            } else {
                star1.classList.add('selected-star');
                star2.classList.add('selected-star');
                star3.classList.add('selected-star');
                
                library.innerHTML = null;
                fetchApi(`evaluation/${value}`);
            }
            break;

        case 4:
            if (star4.classList.contains('selected-star')) {
                star1.classList.remove('selected-star');
                star2.classList.remove('selected-star');
                star3.classList.remove('selected-star');
                star4.classList.remove('selected-star');
                star5.classList.remove('selected-star');

                library.innerHTML = null;
                fetchApi('books');
            } else {
                star1.classList.add('selected-star');
                star2.classList.add('selected-star');
                star3.classList.add('selected-star');
                star4.classList.add('selected-star');
                
                library.innerHTML = null;
                fetchApi(`evaluation/${value}`);
            }
            break;

        case 5:
            if (star5.classList.contains('selected-star')) {
                star1.classList.remove('selected-star');
                star2.classList.remove('selected-star');
                star3.classList.remove('selected-star');
                star4.classList.remove('selected-star');
                star5.classList.remove('selected-star');

                library.innerHTML = null;
                fetchApi('books');
            } else {
                star1.classList.add('selected-star');
                star2.classList.add('selected-star');
                star3.classList.add('selected-star');
                star4.classList.add('selected-star');
                star5.classList.add('selected-star');
                
                library.innerHTML = null;
                fetchApi(`evaluation/${value}`);
            }
            break;

        default:
            break;
    }
}

function betweenPrices() {
    let minPrice = document.getElementById('min-price').value;
    let maxPrice = document.getElementById('max-price').value;

    if (minPrice !== '' && maxPrice !== '') {
        fetchApi(`price?firstPrice=${minPrice}&secondPrice=${maxPrice}`);
    } else if (minPrice === '' && maxPrice === ''){
        fetchApi('books');
    } else {
        return;
    }
}