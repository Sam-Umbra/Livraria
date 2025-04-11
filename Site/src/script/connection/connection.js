async function fetchGET(endpoint) {
    try {
        
        const response = await fetch(`http://localhost:8080/library/${endpoint}`);

        if (!response.ok) {
            throw new Error("Error upon fetching the resource");
        }

        return response.json();

    } catch (error) {
        console.error(error);
        alert("Livro não encontrado!");
    }
}

export {fetchGET}