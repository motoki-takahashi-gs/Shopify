import os
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import csv
import pandas as pd
from selenium.common.exceptions import NoSuchElementException

filePath = r'C:\Users\Motoki.JPL-BVQLP13\Downloads\items.csv'
driverPath = r"C:\chromedriver_win32"
downloadPath = r'C:\Users\Motoki.JPL-BVQLP13\Downloads\url_list_with_itemCode.csv'

colName = ['item_code']
df = pd.read_csv(filePath, names=colName)
itemList = []

os.environ['PATH'] += driverPath
driver = webdriver.Chrome()
driver.get("https://www.decathlon.co.jp/")
driver.implicitly_wait(5)

with open(filePath) as csvfile:
    items = csv.reader(csvfile)
    for item in items:
        searchBox = driver.find_element(
            By.CSS_SELECTOR, '#demo-search > div > form > input')
        searchBox.clear()
        searchBox.send_keys(item, Keys.ENTER)

        try:
            productElm = driver.find_element(
                By.CSS_SELECTOR, 'ul.snize-search-results-content > li > a')
            productUrl = productElm.get_attribute('href')
        except NoSuchElementException:
            productUrl = 'No URL'

        itemList.append(productUrl)

df['URL'] = itemList
df.to_csv(downloadPath)
