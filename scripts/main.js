var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail'
var TINY_EFFECT_CLASS = 'is-tiny'
var ESC_KEY = 27;

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
        showDetails();
    });
}

function getThumbnailsArray(){
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails(){
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails(){
    'use strict'
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR)
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS)
    setTimeout(function(){
        frame.classList.remove(TINY_EFFECT_CLASS)
    }, 50);
    

}

function initializeEvents(){
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    keyPressHandler();
}

function keyPressHandler(){
    'use strict'
    document.body.addEventListener('keyup', function(event){
        event.preventDefault();
        console.log(event.keyCode);
        if (event.keyCode === ESC_KEY){
            hideDetails();
        }
    })
}

initializeEvents();