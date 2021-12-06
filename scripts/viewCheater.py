import requests
import random
import time
from requests_html import HTMLSession

urls = [
    "https://10re.github.io/Portfolio/index.html",
    "https://10re.github.io/Portfolio/pages/weapons.html",
    "https://10re.github.io/Portfolio/pages/skins.html",
    "https://10re.github.io/Portfolio/pages/accessories.html",
    "https://10re.github.io/Portfolio/pages/about.html"
]

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}

while (1):

    cur_url = random.choice(urls)
    print("Visiting " + cur_url)

    s = HTMLSession()
    r = s.get(cur_url, headers=headers)
    r.html.render()
    s.cookies.clear()
    
    time.sleep(1)
