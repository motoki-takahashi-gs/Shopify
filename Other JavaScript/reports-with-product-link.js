(function () {

    const clickEditColums = () => {
        document.querySelector('#AppFrameMain > div > div > div.Polaris-Page__Content_xd1mk > div.Polaris-Card_yis1o > div.nI9Cp > div > button').click();
    }

    const clickProductId = () => {
        document.querySelector('label[for=product_id]').click();
    }

    clickEditColums();
    clickProductId();
    clickEditColums();

    setInterval(() => {
        const products = document.querySelectorAll('#AppFrameMain > div > div > div.Polaris-Page__Content_xd1mk > div.Polaris-Card_yis1o > div._3HrI0 > div._2hx0t > div > table > tbody > tr');

        let div, tdArray, a;
        const regex = /^(\d{13})$/;

        products.forEach(element => {
            tdArray = element.childNodes;

            tdArray.forEach(td => {
                if (td.textContent.match(regex)) {
                    div = td.firstChild;
                }
            });

            a = document.createElement('a');
            a.setAttribute('href', 'https://xxx.myshopify.com/admin/products/' + div.textContent);
            a.setAttribute('target', '_blank');
            a.textContent = div.textContent;
            div.textContent = '';
            div.appendChild(a);
        });
    }, 1000);
})();