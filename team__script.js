
function getcards(){

    const section = document.querySelector('.cards')

    const fetchPromise = fetch('personale.JSON');

    fetchPromise
    .then( response => {
        if (!response.ok) {
            throw new Error (`Fetch Error: ${response.status}`)
        }
        return response.json();
    })
    .then( json => {
        let output;

        json.personale.forEach(i => {
            output += `<article class="cards__card">
                        <h1 class="cards__title">${i.name} - ${i.position}</h1>
                        <p class="cards__description">${i.description}</p>
                        <img class="cards__person" src="${i.image}" alt="Spiller Billede">
                        </article>`
        });
        section.innerHTML = output
    })
    .catch( error => {
        console.error(`Could not get products: ${error}`);
    });

}

getcards();