// Variables
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photosArray = [];


// Unspash API
const photoCount = 10;
const apiKey = 'IKTUNTePQpRzjcNMpE14gEwwsqSDpzSrCCZtD23Y2bM';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${photoCount}`;

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {

    // Run function for each object in photosarray
    photosArray.forEach((photo) => {

        //Create <a> to link to unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target:'_blank',
        });
        
        // create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });

        // Put <img> inside the <a>, then both inside the image-container element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();

    } catch (error) {
        //catch error here
    }
}

// On Load
getPhotos();