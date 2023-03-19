#!/usr/bin/python3
"""
Script that tkaes an argument and prints where name matches
Arguments
name searched(str)
username(str)
database name(str)
"""
import sys
import MySQLdb

if __name__ == "__main__":
    name = sys.argv[1]
    pss = sys.argv[2]
    dbs = sys.argv[3]
    name_searched = sys.argv[4]

    # defaults to localhost 3306
    db = MySQLdb.connect(user=name, password=pss, db=dbs)

    cur = db.cursor()

    cur.execute("SELECT * FROM states WHERE name LIKE BINARY '{}' ORDER BY id"
                .format(name_searched))

    rows = cur.fetchall()

    for row in rows:
        print(row)
