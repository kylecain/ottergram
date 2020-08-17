var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails(imageURL, titleText){
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);

    detailImage.setAttribute('src', imageURL);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail){
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromthumb(thumbnail){
    'use strict'
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromthumb(thumbnail){
    'use strict'
    setDetails(imageFromThumb(thumbnail), titleFromthumb(thumbnail));
}

function addThumbClickHandler(thumb){
    'use strict'
    thumb.addEventListener('click', function(event){
        event.preventDefault();
        setDetailsFromthumb(thumb);
    });
}

function getThumbnailsArray(){
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function initializeEvents(){
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();