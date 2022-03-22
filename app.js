import { renderGemstonez, renderAnimalz } from './render-utils.js';
import { fetchAllAnimalz, fetchAllGemstonez } from './fetch-utils.js';

const gemstonezListEl = document.querySelector('.gemstone-list');
const animalzListEl = document.querySelector('.animalz-list');


window.addEventListener('load', async () => {
  fetchAndDisplayGemstonez();
  fetchAndDisplayAnimalz();
});


async function fetchAndDisplayGemstonez() {

  const gemstonez = await fetchAllGemstonez();

  for (let gemstone of gemstonez) {
    const gemstoneEl = renderGemstonez(gemstone);

    gemstonezListEl.append(gemstoneEl);
  }
}


async function fetchAndDisplayAnimalz() {

  const animalz = await fetchAllAnimalz();

  for (let animal of animalz) {
    const animalEl = renderAnimalz(animal);
    animalzListEl.append(animalEl);
  }
}