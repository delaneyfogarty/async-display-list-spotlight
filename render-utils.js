
export function renderGemstonez(gem) {
    const gemstoneEl = document.createElement('div');
    const nameEl = document.createElement('h4');
    const varietyEl = document.createElement('p');
    const colorEl = document.createElement('p');
    const propertiesEl = document.createElement('ul');

    gemstoneEl.classList.add('gem');

    nameEl.textContent = gem.Name;
    varietyEl.textContent = gem.Variety;
    colorEl.textContent = gem.Color;
    //propertiesEl.textContent = gem.Properties;
		console.log(nameEl, gem);

    for (let property of gem.Properties) {
        const propertyEl = document.createElement('li');

        propertyEl.textContent = property;

        propertiesEl.appendChild(propertyEl);
    }

    gemstoneEl.append(nameEl, varietyEl, colorEl, propertiesEl);

    return gemstoneEl;
}

export function renderAnimalz(animal) {
	const animalEl = document.createElement('div');
	const nameEl = document.createElement('h4');
	const typeEl = document.createElement('p');
	const	lifespanEl = document.createElement('p');
	const habitatsEl = document.createElement('ul');

	animalEl.classList.add('animal');

	nameEl.textContent = animal.Name;
	typeEl.textContent = animal.Type;
	lifespanEl.textContent = animal.Lifespan;

	for (let habitat of animal.Habitat) {

		const habitatEl = document.createElement('li');

		habitatEl.textContent = habitat;

		habitatsEl.appendChild(habitatEl);
	}
	animalEl.append(nameEl, typeEl, lifespanEl, habitatsEl);
	return animalEl;
}
