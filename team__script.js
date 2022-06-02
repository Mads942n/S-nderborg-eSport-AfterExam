
function getcards(){
    /* Fetchin the JSON file */
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
        /* Declaring a variable called output. */
        let output;
        /* Looping through the JSON file and putting the data into the HTML. */
        json.personale.forEach(i => {
            output += `<article class="card">
                        <h1 class="card__title">${i.name} - ${i.position}</h1>
                        <p class="card__description">${i.description}</p>
                        <img class="card__person" src="${i.image}" alt="Spiller Billede">
                        </article>`
        });
        section.innerHTML = output
    })
    /* Catching any errors that might occur. */
    .catch( error => {
        console.error(`Could not get data: ${error}`);
    });
}
getcards();




