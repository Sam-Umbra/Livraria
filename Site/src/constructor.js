function bookCard(data) {
    /*
    root = section.library
    div.book
        figure
            div.img
                img
            figcaption
                h2
        p#author
        p#publisher
        p#year

    */
   console.log(data)
    data.forEach(element => {

        const library = document.querySelector('.library');
        const book = document.createElement('div');
        book.classList.add('book');
        const figure = document.createElement('figure');
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        const h2 = document.createElement('h2');
        const pAuthor = document.createElement('p');
        pAuthor.id = 'author';
        const pPublisher = document.createElement('p');
        pPublisher.id = 'publisher';
        const pYear = document.createElement('p');
        pYear.id = 'year';

        //img.src = element.image;
        h2.innerHTML = element.name;
        img.alt = `Imagem do Livro ${h2.innerHTML}`;
        pAuthor.innerHTML = element.author;
        pPublisher.innerHTML = element.publisher;
        pYear.innerHTML = element.yearPublished;

        const id = element.id;
        book.addEventListener('click', (bookModal(id)));

        library.appendChild(book);
        book.appendChild(figure);
        figure.appendChild(imgDiv);
        imgDiv.appendChild(img);
        figure.appendChild(figcaption);
        figcaption.appendChild(h2);
        book.appendChild(pAuthor);
        book.appendChild(pPublisher);
        book.appendChild(pYear);

    });
    
}

function bookModal(id) {
    
}

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

export {bookCard}