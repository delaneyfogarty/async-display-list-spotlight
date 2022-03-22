

export function renderGemstonez(gem) {
    const gemstoneEl = document.createElement('div');
    const nameEl = document.createElement('h2');
    const varietyEl = document.createElement('p');
    const colorEl = document.createElement('p');
    const propertiesEl = document.createElement('ul');

    gemstoneEl.classList.add('gem');

    nameEl.textContent = gem.name;
    varietyEl.textContent = gem.variety;
    colorEl.textContent = gem.color;
    propertiesEl.textContent = gem.properties;


    for (let property of gem.properties) {
        const propertyEl = document.createElement('li');

        propertyEl.textContent = property;

        propertiesEl.appendChild(propertyEl);
    }

    gemstoneEl.append(nameEl, varietyEl, colorEl, propertiesEl);

    return gemstoneEl;
}
