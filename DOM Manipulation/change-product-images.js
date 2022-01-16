(function () {
    // thumbnail in a product page
    const oldThumbnailUrl = 'cdn.shopify.com/xxx.progressive.png.jpg';
    const newThumbnailUrl = 'cdn.shopify.com/xxx.progressive.png.jpg';

    // image elements
    const thumbnailImageElements = document.querySelectorAll('[data-src*=' + CSS.escape(oldThumbnailUrl) + ']');

    // each size of images
    const sizeArray = ['75w', '100w', '150w', '200w', '240w', '350w', '451w', '550w', '600w'];

    // set new thumbnail
    let srcArray = [];
    let newThumbnailSrcSet = '';
    for (let i = 0; i < thumbnailImageElements.length; i++) {
        thumbnailImageElements[i].setAttribute('data-src', '//' + newThumbnailUrl);
        thumbnailImageElements[i].setAttribute('src', '//' + newThumbnailUrl);

        for (let j = 0; j < sizeArray.length; j++) {
            srcArray.push('//' + newThumbnailUrl + ' ' + sizeArray[j]);
        }

        newThumbnailSrcSet = srcArray.join();
        thumbnailImageElements[i].setAttribute('srcset', newThumbnailSrcSet);
        srcArray = [];
    }

    // main big picture in a product page
    const oldBigImgUrl = 'cdn.shopify.com/xxx.progressive.png.jpg';
    const newBigImgUrl = 'cdn.shopify.com/xxx.progressive.png.jpg';

    // image elements
    const bigImageElements = document.querySelectorAll('[data-src*=' + CSS.escape(oldBigImgUrl) + ']');

    // set new big picture
    for (let i = 0; i < bigImageElements.length; i++) {
        bigImageElements[i].setAttribute('data-src', '//' + newBigImgUrl);
        bigImageElements[i].setAttribute('data-carousel-src', '//' + newBigImgUrl);
        bigImageElements[i].setAttribute('src', '//' + newBigImgUrl);
    }
})();