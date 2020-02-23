class Ammo:

    def __init__(self, name, atype, damage, pValue, aDamage, fChance, c1, c2, c3, c4, c5, c6):
        self.name = name
        self.type = atype
        self.damage = damage
        self.pValue = pValue
        self.aDamage = aDamage
        self.fChance = fChance
        self.c1 = c1
        self.c2 = c2
        self.c3 = c3
        self.c4 = c4
        self.c5 = c5
        self.c6 = c6

    def __str__(self):
    	string = self.name + ' | ' +self.type+' | '
    	string +=str(self.damage)+ ' | '
    	string +=str(self.pValue)+ ' | '
    	string +=str(self.aDamage)+ ' | '
    	string +=self.fChance+ ' | '
    	string +=str(self.c1)+ ' | '
    	string +=str(self.c2)+ ' | '
    	string +=str(self.c3)+ ' | '
    	string +=str(self.c4)+ ' | '
    	string +=str(self.c5)+ ' | '
    	string +=str(self.c6)
    
    	return string

