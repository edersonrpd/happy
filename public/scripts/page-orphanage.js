const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWhellZoom: false,
  zoomControl: false,
};

//creat map
const map = L.map('mapid', options).setView([-27.2207393, -49.6473367], 15);

// create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
  iconUrl: './public/images/map-marker.svg',
  iconSize: [58, 58],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create and  marker
L.marker([-27.2207393, -49.6473367], {icon}).addTo(map);

/* Galeria de Imagens */
function selectImage(event) {
  const button = event.currentTarget;
  //remover classe active
  const buttons = document.querySelectorAll('.images button');

  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove('active');
  }

  //selecionar imagens clicadas
  const image = button.children[0];
  const imageContainer = document.querySelector('.orphanage-details > img');

  //atualizar container image
  imageContainer.src = image.src;

  //adicionar classe .active no botao clicado
  button.classList.add('active');
}
