import os.path
from ammo import Ammo
from os import path
from bs4 import BeautifulSoup



def loadHtml(file):
	with open(file,"r", encoding="utf-8") as f:
		return f.read()

def getTableFromHtml(code):
	global tables

	soup = BeautifulSoup(code, 'html.parser')
	table = soup.find('table')
	#print(tables[1])
	
	saveTables(table)
	
	return table

def saveTables(tables):
	with open("data/tables.html","w", encoding="utf-8") as f:
		return f.write(str(tables))

def getTables():
	with open("data/tables.html","r", encoding="utf-8") as f:
		return BeautifulSoup(f.read(), 'html.parser').find('table')

def getRows(tableBody):
	
	rows = []
	trs = tableBody.find_all('tr')
	headerow = [td.get_text(strip=True) for td in trs[0].find_all('th')] # header row
	
	# If there is a header row include first
	if headerow: 
		rows.append(headerow)
		trs = trs[1:]
	
	# For every table row
	for tr in trs: 
		rows.append([td.get_text(strip=True) for td in tr.find_all('td')]) # data row
	
	return rows[35:]

def createAmmoList(rows):
	ammos = []
	lines = []
	name = ''
	for r in rows:
		line = ''
		
		if len(r) < 28:
			if len(r) == 27:
				name = str(r[0])
				r=r[1:] 
			aType = r[0]
			damage = r[1]
			pValue = r[2]
			aDamage = r[3]
			fChance = r[4]
			c1 = r[5]
			c2 = r[6]
			c3 = r[7]
			c4 = r[8]
			c5 = r[9]
			c6 = r[10]
			
			for c in range(11):
				
				line += r[c] + ' | '
		
		if len(line) > 1:
			ammos.append(Ammo(name, aType, damage, pValue, aDamage, fChance, c1, c2, c3, c4, c5, c6))
		
	return ammos


def getAmmos():
	
	rows = []
	if os.path.isfile('data/tables.html'):
		print ("data/tables.html exists, we can work with that, so fastAsFuckBOI")
		table = getTables()	

	else:
		print ("data/tables.html does not exist, creating one for you, it takes some time...")
		htmlCode = loadHtml("data/Backup 2 of NoFoodAfterMidnight's EFT Ammo and Armor Charts.html")
	
		#print(htmlCode[10:50])
		table = getTableFromHtml(htmlCode)

	table_body = table.find('tbody')
		
	for r in getRows(table_body):
		rows.append(r)

	ammos = createAmmoList(rows)
	
	
	return ammos
