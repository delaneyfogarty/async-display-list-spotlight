import { renderGemstonez, renderAnimalz, renderSingerz } from './render-utils.js';
import { fetchAllAnimalz, fetchAllGemstonez, fetchAllSingerz } from './fetch-utils.js';

const gemstonezListEl = document.querySelector('.gemstone-list');
const animalzListEl = document.querySelector('.animalz-list');
const singerzListEl = document.querySelector('.singerz-list');


window.addEventListener('load', async () => {
  fetchAndDisplayGemstonez();
  fetchAndDisplayAnimalz();
  fetchAndDisplaySingerz();
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

async function fetchAndDisplaySingerz() {

  const singerz = await fetchAllSingerz();

  for (let singer of singerz) {
    const singerEl = renderSingerz(singer);
    singerzListEl.append(singerEl);
  }
}