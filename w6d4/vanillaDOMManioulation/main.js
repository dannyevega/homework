document.addEventListener("DOMContentLoaded", () => {
    // toggling restaurants
    const toggleLine = (e) => {
        const line = e.target;
        if(line.className === "visited"){
            line.className = "";
        } else {
            line.className = "visited";
        }
    }

    const listItems = document.querySelectorAll('#restaurants li');
    listItems.forEach(el => {
        el.addEventListener('click', toggleLine);
    });

    // adding SF places as list items
    const addPlaceItem = (e) => {
        e.preventDefault();

        const placesInput = document.querySelector('form .favorite-input');
        const liText = placesInput.value;
        placesInput.value = "";
        
        const li = document.createElement('li');
        li.append(liText);

        const sfPlaces = document.getElementById('sf-places');
        sfPlaces.appendChild(li);
    }

    const placesForm = document.querySelectorAll('form')[0];
    placesForm.addEventListener('submit', addPlaceItem, false);    

    // adding new photos
    const togglePhotoForm = (e) => {
        const toggleForm = document.querySelector('.photo-form-container');
        toggleForm.classList.toggle('hidden');
    }

    const photoButton = document.querySelector('.photo-show-button');    
    photoButton.addEventListener('click', togglePhotoForm, false);

    const addImage = (e) => {
        e.preventDefault();

        const photoInput = document.querySelector('form .photo-url-input');
        const photoValue = photoInput.value;
        photoInput.value = "";

        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = photoValue;
        li.append(img);

        const dogPhotos = document.querySelector('.dog-photos')
        dogPhotos.appendChild(li);
    }

    const addPhotoForm = document.querySelectorAll('form')[1];
    addPhotoForm.addEventListener('submit', addImage, false);

});
