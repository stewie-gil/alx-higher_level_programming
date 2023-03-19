#!/usr/bin/python3
"""
This script lists all states with a name starting with N
arguments"
mysql username(str)
mysql password(str)
database name(str)
"""

import sys
import MySQLdb

if __name__ == "__main__":
    name = sys.argv[1]
    pss = sys.argv[2]
    dbs = sys.argv[3]

    # by default it connects to local host port 3306
    db = MySQLdb.connect(user=name, password=pss, db=dbs)

    cur = db.cursor()

    cur.execute("SELECT * FROM states WHERE name LIKE BINARY 'N%' ORDER BY ID")

    rows = cur.fetchall()
    for row in rows:
        print(row)
