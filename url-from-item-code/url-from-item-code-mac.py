from selenium import webdriver
import chromedriver_binary
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import csv
import pandas as pd

filePath = r'/Users/motoki/Documents/Decathlon/RPA/items.csv'
downloadPath = r'/Users/motoki/Documents/Decathlon/RPA/url_list_with_itemCode.csv'

colName = ['item_code']
df = pd.read_csv(filePath, names=colName)
itemList = []

driver = webdriver.Chrome()
driver.get("https://www.decathlon.co.jp/")
driver.implicitly_wait(30)

with open(filePath) as csvfile:
    items = csv.reader(csvfile)
    for item in items:
        searchBox = driver.find_element(
            By.CSS_SELECTOR, '#demo-search > div > form > input')
        searchBox.clear()
        searchBox.send_keys(item, Keys.ENTER)

        productElm = driver.find_element(
            By.CSS_SELECTOR, 'ul.snize-search-results-content > li > a')
        productUrl = productElm.get_attribute('href')
        itemList.append(productUrl)

df['URL'] = itemList
df.to_csv(downloadPath)
