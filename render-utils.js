
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

export function renderSingerz(singer) {
	const singerEl = document.createElement('div');
	const nameEl = document.createElement('h4');
	const imgEl = document.createElement('img');
	const ageEl = document.createElement('p');
	const firstAlbumEl = document.createElement('p');
	const favoriteSongsEl = document.createElement('ul');

	singerEl.classList.add('singer');

	nameEl.textContent = singer.Name;
	imgEl.src = singer.Image;
	ageEl.textContent = `Age: ${singer.Age}`;
	firstAlbumEl.textContent = `First Album: ${singer.First_Album}`;

	for (let song of `Favorite Songs:${singer.Favorite_Songs}`) {
		const songEl = document.createElement('li');

		songEl.textContent = song;

		favoriteSongsEl.appendChild(songEl);
	}

	singerEl.append(nameEl, imgEl, ageEl, firstAlbumEl, favoriteSongsEl);

	return singerEl;

}

export function renderPlacez(place) {
	const placeEl = document.createElement('div');
	const locationEl = document.createElement('h4');
	const countryEl = document.createElement('p');
	const	memoryEl = document.createElement('p');
	const foodEl = document.createElement('p');

	placeEl.classList.add('place');

	locationEl.textContent = `Favorite Place: ${place.Location}`;
	countryEl.textContent = place.Country;
	memoryEl.textContent = `Favorite Memory: ${place.Favorite_Memory}`;
	foodEl.textContent = `Best Food: ${place.Good_Food}`;

	placeEl.append(locationEl, countryEl, memoryEl, foodEl);

	return placeEl;
}

