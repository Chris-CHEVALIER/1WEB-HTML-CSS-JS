let countLabel = document.getElementById('count-label')
let clickBtn = document.querySelector('#click-btn')

let count = 0
clickBtn.addEventListener('click', function () {
  count++
  countLabel.textContent = count
})

// Sélection des éléments
const button = document.getElementById('change-theme-button')

// Ajout de l'écouteur d'événement
button.addEventListener('click', changeColor)

// Fonction pour changer la couleur
function changeColor () {
  if (document.body.style.backgroundColor == 'black') {
    document.body.style.backgroundColor = 'white' // Change la couleur de fond de la page
    document.body.style.color = 'black'
  } else {
    document.body.style.backgroundColor = 'black' // Change la couleur de fond de la page
    document.body.style.color = 'white'
  }
}

const showButton = document.getElementById('show-button');
const hideButton = document.getElementById('hide-button');
const hiddenText = document.getElementById('hidden-text');

showButton.addEventListener('click', function() {
    hiddenText.style.display = 'block'; // Affiche l'élément
})

hideButton.addEventListener('click', function() {
    hiddenText.style.display = 'none'; // Cache l'élément
})

const input = document.getElementById('item');
const btn = document.getElementById('add-button');
const list = document.getElementById('list');

btn.addEventListener('click', function() {
    const text = input.value;
    if (text) {
        const newItem = document.createElement('li');
        newItem.textContent = text;
        list.appendChild(newItem);
        input.value = ''; // Réinitialise le champ de texte
    }
})