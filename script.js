

/*
To do:


Alle sider:
    - burger menu.
    - Search icon bliver til Search bar.

Forside:
    - Slideshow med dots.

Hold:
    -Hele siden er et slideshow.
    -Slideshow skal være interaktivt.

V̶o̶r̶e̶s̶ T̶e̶a̶m̶:̶
    -̶T̶r̶æ̶n̶e̶r̶ k̶o̶r̶t̶,̶ i̶n̶f̶o̶ s̶k̶a̶l̶ h̶e̶n̶t̶e̶s̶ n̶e̶d̶ f̶r̶a̶ J̶S̶O̶N̶ f̶i̶l̶.̶
    -̶O̶p̶r̶e̶t̶t̶e̶ p̶l̶a̶y̶e̶r̶ c̶a̶r̶d̶s̶ n̶å̶r̶ s̶i̶d̶e̶n̶ l̶o̶a̶d̶e̶r̶ m̶e̶d̶ i̶n̶f̶o̶ f̶r̶a̶ J̶S̶O̶N̶ f̶i̶l̶.̶
    E̶k̶s̶e̶m̶p̶e̶l̶ p̶å̶ h̶t̶m̶l̶ o̶p̶s̶t̶i̶l̶l̶i̶n̶g̶ a̶f̶ p̶l̶a̶y̶e̶r̶ c̶a̶r̶d̶:̶
        <̶a̶r̶t̶i̶c̶l̶e̶ c̶l̶a̶s̶s̶=̶"̶c̶a̶r̶d̶s̶_̶_̶c̶a̶r̶d̶"̶>̶
            <̶h̶1̶ c̶l̶a̶s̶s̶=̶"̶c̶a̶r̶d̶s̶_̶_̶t̶i̶t̶l̶e̶"̶>̶<̶/̶h̶1̶>̶
            <̶p̶ c̶l̶a̶s̶s̶=̶"̶c̶a̶r̶d̶s̶_̶_̶d̶e̶s̶c̶r̶i̶p̶t̶i̶o̶n̶"̶>̶L̶o̶r̶e̶m̶ i̶p̶s̶u̶m̶ d̶o̶l̶o̶r̶ s̶i̶t̶ a̶m̶e̶t̶ c̶o̶n̶s̶e̶c̶t̶e̶t̶u̶r̶ a̶d̶i̶p̶i̶s̶i̶c̶i̶n̶g̶ e̶l̶i̶t̶.̶<̶/̶p̶>̶
            <̶i̶m̶g̶ c̶l̶a̶s̶s̶=̶"̶c̶a̶r̶d̶s̶_̶_̶p̶e̶r̶s̶o̶n̶"̶ s̶r̶c̶=̶"̶"̶ a̶l̶t̶=̶"̶S̶p̶i̶l̶l̶e̶r̶ B̶i̶l̶l̶e̶d̶e̶"̶>̶
        <̶/̶a̶r̶t̶i̶c̶l̶e̶>̶

Praktisk info:
    -Dropdown info kasser, med animation
    - Google maps integration:
      https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-javascript













*/

//----------------------Vores Team----------------------

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













 //----------------------Praktisk info----------------------


// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById('Map'), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

  window.initMap = initMap;


  const article__dropdown__title = document.querySelectorAll('.dropdown__title')
  const article__dropdown = document.querySelectorAll('.dropdown')


 article__dropdown__title.forEach( i => {
     i.addEventListener('click', dropdown => {
        i.parentNode.classList.add('dropdown--animation')
        console.log(i.parentNode)
     })
 })
