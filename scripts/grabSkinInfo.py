from bs4 import BeautifulSoup
from cssutils import parseStyle
import requests
import json

url = 'http://market.csgo.com/en/'
data_file_name = "jsons/skins_data.json"
skin_dict = {"skins": []}
html = requests.get(url).text
soup = BeautifulSoup(html)
items = soup.find("div", class_ = "market-items").contents
for item in items[1:-1]:
    link = item["href"]
    img_style = item.find("div", class_ = "image")["style"]
    img_url = parseStyle(img_style)["background-image"][4:-1]
    price = item.find("div", class_ = "price").text
    name = item.find("div", class_ = "name").text
    skin_dict["skins"].append({
        "name": name,
        "link": 'http://market.csgo.com' + link,
        "img_url": img_url,
        "price": price
    })
with open(data_file_name, "w") as f:
        json.dump(skin_dict, f)