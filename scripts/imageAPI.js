document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');

    // Prompt user for password
    const password = prompt('Enter password to access the gallery:');
        
    const passwords = ['00176', '83555', '47635', '04655'];

    if (!passwords.includes(password)) {
        alert('Incorrect password. Access denied.');
        return;
    }

    fetchMediaFiles('https://murderporn.ct8.pl/images/')
        .then(files => {
            files.forEach(file => {
                const mediaItem = createMediaElement(file);
                gallery.appendChild(mediaItem);
            });
        })
        .catch(error => {
            console.error('Error fetching media files:', error);
        });
});

async function fetchMediaFiles(directoryUrl) {
    const response = await fetch(directoryUrl);document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');

    fetchMediaFiles('https://murderporn.ct8.pl/images')
        .then(files => {
            files.forEach(file => {
                const mediaItem = createMediaElement(file);
                gallery.appendChild(mediaItem);
            });
        })
        .catch(error => {
            console.error('Error fetching media files:', error);
        });
});

async function fetchMediaFiles(directoryUrl) {
    const response = await fetch(`/get-media?url=${encodeURIComponent(directoryUrl)}`);
    const data = await response.json();
    return data.files;
}

function createMediaElement(fileUrl) {
    const fileExtension = fileUrl.split('.').pop();
    let mediaElement;

    if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
        mediaElement = document.createElement('img');
        mediaElement.src = fileUrl;
    } else if (fileExtension === 'mp4') {
        mediaElement = document.createElement('video');
        mediaElement.src = fileUrl;
        mediaElement.controls = true;
    }

    const mediaItem = document.createElement('div');
    mediaItem.className = 'media-item';
    mediaItem.appendChild(mediaElement);

    return mediaItem;
}

    const text = await response.text();
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(text, 'text/html');

    const links = Array.from(htmlDocument.querySelectorAll('a'));
    const mediaFiles = links
        .map(link => link.getAttribute('href'))
        .filter(href => href.match(/\.(jpg|jpeg|png|gif|mp4)$/));

    return mediaFiles.map(file => `${directoryUrl}/${file}`);
}

function createMediaElement(fileUrl) {
    const fileExtension = fileUrl.split('.').pop();
    let mediaElement;

    if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
        mediaElement = document.createElement('img');
        mediaElement.src = fileUrl;
    } else if (fileExtension === 'mp4') {
        mediaElement = document.createElement('video');
        mediaElement.src = fileUrl;
        mediaElement.controls = true;
    }

    const mediaItem = document.createElement('div');
    mediaItem.className = 'media-item';
    mediaItem.appendChild(mediaElement);

    return mediaItem;
}
