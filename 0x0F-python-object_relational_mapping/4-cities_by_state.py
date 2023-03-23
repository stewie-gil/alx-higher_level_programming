#!/usr/bin/python3
"""
Script lists all cities
Arguments
usernmae(str)
password(str)
databasename()
"""
import sys
import MySQLdb

if __name__ == "__main__":
    name = sys.argv[1]
    passw = sys.argv[2]
    dtb = sys.argv[3]

    db = MySQLdb.connect(user=name, passwd=passw, db=dtb)

    cur = db.cursor()

    cur.execute("SELECT cities.id, cities.name,states.name\
 FROM cities INNER JOIN states ON\
 cities.state_id=states.id ORDER BY cities.id")

    rows = cur.fetchall()

    for row in rows:
        print(row)
