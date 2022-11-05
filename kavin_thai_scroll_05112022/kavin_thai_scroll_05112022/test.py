import subprocess
import sys

def nochmal():
    while True:
        nochmal = input("Nochmal - Bitte j oder n eingeben: ")
        if nochmal in ["j","n"]:
            break
        else:
            print("Falsche Eingabe!!!)")
    if nochmal == "n":
        sys.exit()

def clearscreen():
    subprocess.run(["clear"])

while True:
    clearscreen()

    vorname = input("Vorname: ")
    nachname = input("Nachname: ")
    alter = int(input("Alter: "))

    if alter < 10:
        print("Dein Name ist {} {} und du bist {} Jahre alt und ein Kind.".format(vorname.upper(),nachname.upper(),alter))
    elif alter >= 10 and alter < 20:
        print("Dein Name ist {} {} und du bist {} Jahre alt und ein Teenager.".format(vorname.upper(),nachname.upper(),alter))
    else:
        print("Dein Name ist {} {} und du bist {} Jahre alt und ein alter Sack.".format(vorname.upper(),nachname.upper(),alter))
    
    
    
    nochmal()

