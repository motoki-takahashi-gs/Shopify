
Although code here is not Liquid (as I can't share Liquid code because of some reasons), I made some code with JavaScript and Python to make solutions for an E-commerce website made of Shopify.

# DOM Manipulation

## change-product-images
I made it when images in a product page could not be changed from an internal database system due to a system constraint. The code will change a thumbnail and big image to new ones after a page is loaded.

## reports-with-product-link
This code will dynamically make a link for each product detail page of Shopify admin panel in a sales report page of Shopify in order to make it easy to access to each product page to check inventories, etc. It can be used as a Bookmarklet.

# Google Apps Script

## carousel-in-collection.gs
This script makes a portion of JavaScript code which can be used to show a carousel of products you want to highlight in a collection page in Shopify collaborating with Google Tag Manager. The code can be executed while cells in a spreadsheet of Google Sheets are selected.

# Google Colaboratory

## 404_error_pages
I made this code to solve an issue of product pages which got 404 error whose URLs have been modified due to an unwanted sudden system change of database which made a portion of each URL overridden compared to before. The data was gotten from Google Analytics getting page titles / URLs of each product page. What this code does is to identify sets of an old URL / a new URL of product pages assuming that their page titles have not been changed between before and after the URLs were changed resulting in being able to identify the modified URLs using page titles.

## monitor_hero_products_performance
This code makes it visible to see specific hero products' sales performance.

## Sales_forecast_for_2021_Prophet
Sales forecast for an E-commerce site based on the results of 2020 using Prophet.

## stock_unsync_issue
This code identifies items with stock-uncync issue.

## zip_code_2021_09
This code does data shaping for zip code in Japan so that it can be usable in database.

# KARTE Blocks
The code enables a website to use KARTE Blocks in combination with "slick" which is a responsive carousel jQuery plugin making a set of products with carousel section. URLs and images in the JavaScript code will become destination URLs and thumbnails of each product you want to show in the carousel.

# Robotic Process Automation

## get-url-from-item-code
This code has been made to automatically get URLs of product pages whose item ID is written in a CSV file called "items.csv". Once the code is executed, a Chrome browser will be launched and get URLs based on item ID, and another CSV file called "url_list_with_itemCode.csv" with item IDs and URLs will be created in your device.