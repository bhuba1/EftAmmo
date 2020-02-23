from getData import getAmmos
from ammo import Ammo
from os import path
from bs4 import BeautifulSoup

from bs4 import NavigableString
import os.path


filename = 'EFT_ammos.html'

def createBone():
	f = open(filename,'w', encoding="utf-8")
	with open("data/bone.html", "r", encoding = "utf-8") as bone:
		message = bone.read()

	f.write(message)
	f.close()

def createHtml(ammoList):

	with open(filename, "r", encoding="utf-8") as inf:
	    txt = inf.read()
	    soup = BeautifulSoup(txt,'html.parser')
	
	css =  soup.new_tag("link")
	css.attrs["href"] = "styles.css"
	css.attrs["rel"] = "stylesheet"
	soup.head.append(css)

	
	hidden = soup.new_tag('div', id = 'hidden')
	for a in ammoList:
		d = soup.new_tag('input',type='hidden',**{'class':'data'}, value=str(a))	
		hidden.append(d)
	
	
	soup.body.append(hidden)
	
	with open(filename, "w", encoding="utf-8") as out:
	    out.write(str(soup))
	
	print('HTML ready')

def main():
	ammos = getAmmos()
	ammoList = []
	for a in ammos:
		ammoList.append(str(a))

	if os.path.isfile(filename):
		print('Cool you have the EFT html file')
		#os.system("start " + filename)
		os.remove(filename)
		main() 
	else:
		createBone()
		createHtml(ammos)
		os.system("start " + filename)

if __name__ == '__main__':
	main()
