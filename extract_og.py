import urllib.request
import re

urls = [
    "https://imperfectcritic.wordpress.com/2020/07/31/the-night-sky/",
    "https://imperfectcritic.wordpress.com/2020/07/29/why-should-i-grow-plants/",
    "https://imperfectcritic.wordpress.com/2020/07/28/please-do-not-read-this-guest-posting-suganya-devi-p/",
    "https://imperfectcritic.wordpress.com/2020/04/19/consequence-of-ignorance-do-we-practice-or-politics-religion/",
    "https://imperfectcritic.wordpress.com/2020/04/10/dear-girls/",
    "https://imperfectcritic.wordpress.com/2020/04/03/social-distancing-term-heared-for-the-first-time-guest-posting/",
    "https://imperfectcritic.wordpress.com/2020/04/02/consequences-of-ignorance-the-school-education-system/",
    "https://imperfectcritic.wordpress.com/2020/04/02/consequences-of-ignorance-the-modern-tamil-society-and-its-destruction/"
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        match = re.search(r'<meta property="og:image" content="([^"]+)"', html)
        if match:
            print(match.group(1))
        else:
            print("No image found for", url)
    except Exception as e:
        print("Error for", url, e)
