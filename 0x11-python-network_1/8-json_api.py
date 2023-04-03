#!/usr/bin/python3
"""Python script that takes a letter, sends POST request to
http://0.0.0.0:5000/search_user - the letter as a parameter."""

import requests
from sys import argv

if __name__ == "__main__":
    data = {"q": argv[1] if len(argv) > 1 else ""}
    request = requests.post("http://0.0.0.0:5000/search_user", data=data)
    try:
        json = request.json()
        if json:
            print("[{}] {}".format(json.get("id"), json.get("name")))
        else:
            print("No result")
    except:
        print("Not a valid JSON")
