import json
import os

files = os.listdir("jsons")
for file in files:
    f_in = open("jsons/" + file, "r")
    try:
        f_out = open("jsons_str/" + file[:-5] + ".js", "x")
    except FileExistsError:
        f_out = open("jsons_str/" + file[:-5] + ".js", "w")
    data = json.load(f_in)
    data = json.dumps(data)
    f_out.write(file[:-5] + " = \'" + str(data) + "\';")
    f_in.close()
    f_out.close()

