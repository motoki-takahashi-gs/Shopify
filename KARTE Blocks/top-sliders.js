const heading = 'xxxの人気商品';

const urls = [
  'https://xxx.myshopify.com/products/xxx',
  'https://xxx.myshopify.com/products/xxx',
  'https://xxx.myshopify.com/products/xxx',
  'https://xxx.myshopify.com/products/xxx',
  'https://xxx.myshopify.com/products/xxx'
];

const images = [
  'https://cdn.shopify.com/xxx.progressive.jpg',
  'https://cdn.shopify.com/xxx.progressive.jpg',
  'https://cdn.shopify.com/xxx.progressive.jpg',
  'https://cdn.shopify.com/xxx.progressive.jpg',
  'https://cdn.shopify.com/xxx.progressive.jpg'
];

const titles = [
  'product title',
  'product title',
  'product title',
  'product title',
  'product title'
];

const section = document.querySelector('.karte-section');
const slider = document.querySelector('.karte-slider');
const h4 = document.createElement('h4');
h4.append(heading);
section.insertBefore(h4, slider);

for (let i = 0; i < urls.length; i++) {
  const div = document.createElement('div');
  const titleDiv = document.createElement('div');
  const a = document.createElement('a');
  const img = document.createElement('img');
  img.setAttribute('src', images[i]);
  titleDiv.setAttribute('class', 'hero-product-title')
  titleDiv.append(titles[i]);
  a.setAttribute('href', urls[i]);
  a.setAttribute('target', '_blank');
  a.appendChild(img);
  a.appendChild(titleDiv);
  div.appendChild(a);
  slider.appendChild(div);
}

$(document).ready(function () {
  $('.karte-slider').slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerPadding: "2em"
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: "1em"
        }
      }
    ]
  });
});