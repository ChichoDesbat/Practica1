const buscador = document.getElementById("buscador");
let txtBuscado = buscador.value;

const form = document.getElementById("form1")

form.addEventListener('submit', (event) => {
    event.preventDefault();
}
)
  

buscador.addEventListener('input') = () => {
    console.log(txtBuscado);
}
