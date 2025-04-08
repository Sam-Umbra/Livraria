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
        img.src = element.image;
        img.alt = `Imagem do Livro ${h2.innerHTML}`;
        pAuthor.innerHTML = element.author;
        pPublisher.innerHTML = element.publisher;
        pYear.innerHTML = element.yearPublished;

        const id = element.id;
        book.addEventListener('click', () => {
            fetchApi(`books/${id}`);
        });

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

function bookModal(book) {
    
    const body =  document.querySelector('body');

    const modalBox = document.createElement('div');
    modalBox.classList.add('modal-box')
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const exit = document.createElement('i');
    exit.classList.add('fa-solid', 'fa-xmark');
    exit.addEventListener('click', () => {
        modalBox.remove();
    })

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    const title = document.createElement('h2');
    const bookColab = document.createElement('div');
    bookColab.classList.add('book-colaborators');

    /*Colaboradores*/
    const author = document.createElement('p');
    const spanA = document.createElement('span');
    spanA.innerHTML = 'Autor: ';
    author.appendChild(spanA);
    author.innerHTML += book.author;

    const publisher = document.createElement('p');
    const spanP = document.createElement('span');
    spanP.innerHTML = 'Publicadora: ';
    publisher.appendChild(spanP);
    publisher.innerHTML += book.publisher;

    const year = document.createElement('p');
    const spanY = document.createElement('span');
    spanY.innerHTML = 'Ano: ';
    year.appendChild(spanY);
    year.innerHTML += book.yearPublished;

    const category = document.createElement('p');
    const spanC = document.createElement('span');
    spanC.innerHTML = 'Categoria: ';
    category.appendChild(spanC);
    category.innerHTML += book.category;

    const modalMain = document.createElement('div');
    modalMain.classList.add('modal-main');

    const starRatings = document.createElement('div');
    const star1 = document.createElement('i');
    star1.classList.add('fa-solid', 'fa-star');
    const star2 = document.createElement('i');
    star2.classList.add('fa-solid', 'fa-star');
    const star3 = document.createElement('i');
    star3.classList.add('fa-solid', 'fa-star');
    const star4 = document.createElement('i');
    star4.classList.add('fa-solid', 'fa-star');
    const star5 = document.createElement('i');
    star5.classList.add('fa-solid', 'fa-star');
    starRatings.appendChild(star1);
    starRatings.appendChild(star2);
    starRatings.appendChild(star3);
    starRatings.appendChild(star4);
    starRatings.appendChild(star5);

    const evaluation = book.evaluation;
    if (evaluation === 1) {
        star1.classList.add('selected-star');
    } else if (evaluation === 2) {
        star1.classList.add('selected-star');
        star2.classList.add('selected-star');
    } else if (evaluation === 3) {
        star1.classList.add('selected-star');
        star2.classList.add('selected-star');
        star3.classList.add('selected-star');
    } else if (evaluation === 4) {
        star1.classList.add('selected-star');
        star2.classList.add('selected-star');
        star3.classList.add('selected-star');
        star4.classList.add('selected-star');
    } else if (evaluation === 5) {
        star1.classList.add('selected-star');
        star2.classList.add('selected-star');
        star3.classList.add('selected-star');
        star4.classList.add('selected-star');
        star5.classList.add('selected-star');
    }

    const price = document.createElement('h3');
    const description = document.createElement('p');
    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');

    const booksPurchased = document.createElement('p');
    const bpSpan = document.createElement('span');
    // Separa o número em casas de números inteiros com .
    bpSpan.innerHTML = (book.booksPurshased).toLocaleString('pt-BR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    booksPurchased.innerHTML = `Livros Comprados: `;
    booksPurchased.appendChild(bpSpan);
    const button = document.createElement('button');


    img.src = book.image;
    img.alt = `Imagem do livro ${book.name}`;
    title.innerHTML = book.name;
    // Converte o separador decimal . para ,
    price.innerHTML = `R$ ${(book.price).toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
    description.innerHTML = book.description;
    const a = document.createElement('a');
    a.href = "src/shopping.html";
    button.innerHTML = "Comprar";
    a.appendChild(button);


    body.appendChild(modalBox);
    modalBox.appendChild(modal);
    modal.appendChild(figure);
    figure.appendChild(img);
    modal.appendChild(modalContent);
    modalContent.appendChild(exit);
    modalContent.appendChild(modalHeader);
    modalHeader.appendChild(title);
    modalHeader.appendChild(bookColab);
    bookColab.appendChild(author)
    bookColab.appendChild(publisher);
    bookColab.appendChild(year);
    bookColab.appendChild(category);
    modalContent.appendChild(modalMain);
    modalMain.appendChild(starRatings);
    modalMain.appendChild(price);
    modalMain.appendChild(description);
    modalContent.appendChild(modalFooter);
    modalFooter.appendChild(booksPurchased);
    modalFooter.appendChild(a);

}

async function fetchApi(uri) {
    try {
        
        const response = await fetch(`http://localhost:8080/library/${uri}`);

        if (!response.ok) {
            throw new Error("Error upon fetching the resource");
        }

        const data = await response.json();

        console.log(data);
        bookModal(data);

    } catch (error) {
        console.error(error);
        alert('Livro não encontrado');
    }
}

export {bookCard}