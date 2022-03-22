import { renderGemstonez } from './render-utils.js';
import { fetchAllGemstonez } from './fetch-utils.js';

window.addEventListener('load', async () => {
  fetchAndDisplayGemstonez();
});

const gemstonezListEl = document.querySelector('.gemstone-list');

async function fetchAndDisplayGemstonez() {

  const gemstonez = await fetchAllGemstonez();

  for (let gemstone of gemstonez) {
    const gemstoneEl = renderGemstonez(gemstone);

    gemstonezListEl.append(gemstoneEl);
  }
}
