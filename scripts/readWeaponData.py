import pandas as pd
import json

fopen = open("../jsons/weapons_data.json")
data = pd.read_excel("./weaponData.xlsx")
weapon_json = json.load(fopen)
for weapon in weapon_json["weapons_data"]:
    weapon_name = weapon["name"]
    weapon_data = data.loc[data["Pistols"] == weapon_name].iloc[0]
    weapon["price"] = weapon_data["Price"]
    weapon["reward"] = weapon_data["Kill Award"]
    weapon["damage"] = weapon_data["Damage"] * weapon_data["Bullets"]
    weapon["ap"] = weapon_data["Armor\nPenetration"]
    weapon["rpm"] = weapon_data["Fire Rate\n(RPM)"]
    weapon["magazine"] = weapon_data["Magazine\nSize"]

print(weapon_json)
fopen.close()
fopen = open("../jsons/weapons_data.json", "w")
json.dump(weapon_json, fopen)
fopen.close()