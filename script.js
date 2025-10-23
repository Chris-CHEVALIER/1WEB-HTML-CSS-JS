let siamoisTitle = document.getElementById('siamois')

siamoisTitle.textContent = 'Les super siamois ! 😺'
siamoisTitle.style.backgroundColor = 'dodgerblue'
siamoisTitle.style.padding = '16px'

let newSection = document.createElement('section') // <section></section>
let newH2 = document.createElement('h2') // <h2></h2>
newH2.textContent = 'Les lions 🦁' // <h2>Les lions</h2>
let newImg = document.createElement('img') // <img />
newImg.src =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/011_The_lion_king_Tryggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/960px-011_The_lion_king_Tryggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg' // <img src="..." />
newImg.alt = 'Un lion 🦁' // <img src="..." alt="Un lion 🦁" />

newSection.appendChild(newH2)
newSection.appendChild(newImg)

let main = document.querySelector('main')
main.appendChild(newSection)

/* newSection.removeChild(newH2)
newSection.removeChild(newImg) */
/*
 <section>
    <h2>Les lions 🦁</h2>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/011_The_lion_king_Tryggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/960px-011_The_lion_king_Tryggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg" alt="Un lion 🦁">    
</section>
*/
