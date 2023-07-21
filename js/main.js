
function getData() {
    let promesa = fetch("https://fakestoreapi.com/products/", {
        method: "GET"
    });

    promesa.then((response) => {
        response.json()
            .then(
                (data) => {
                    createCards(data);
                })
            .catch((error) => {
                console.error("Problema en el json", error);
            })
    }).catch((error) => {
        console.error(error, "Ocurrió un error en la solicitud");
    });

}//get Data

getData();

let mainProds = document.getElementById("mainProds");
function createCards(data) {
    data.forEach(producto => {
        mainProds.insertAdjacentHTML("beforeend", `
        <div class="card">
        <img class="card-img" src="${producto.image}" alt="${producto.description}">
        <div class="card-body">
          <h5 class="card-title">${producto.title}</h5>
          <p class="card-text"><strong>${producto.category}</strong></p>
          <p class="card-text">${producto.description.slice(0, 80)}</p>
          <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal_${producto.id}">
          Más Info
          </button>
        </div>
      </div> <!--card-->
      
      <!-- Modal -->
    <div class="modal fade" id="exampleModal_${producto.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${producto.title}</h5>
            </button>
        </div>
        <div class="modal-body">
        ${producto.description}
        <p class="text-center"><strong>$${producto.price} USD</strong></p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn">Save changes</button>
        </div>
        </div>
    </div>
    </div>
        `);

    }//foreach
    );
}//createCards


const typed = new Typed('.title', {
    strings: ['Productos', 'Fake Store Api'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});