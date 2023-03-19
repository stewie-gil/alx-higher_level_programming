#!/usr/bin/python3
"""
writing a script thats safe from SQL injections
Arguments
mysl name(str)
mysql database(str)
password(str)
name_searched(str)
"""
import sys
import MySQLdb

if __name__ == "__main__":
    name = sys.argv[1]
    pas = sys.argv[2]
    dbs = sys.argv[3]

    nm_search = sys.argv[4]

    # default connection to local host 3306
    db = MySQLdb.connect(user=name, password=pas, db=dbs)
    cur = db.cursor()

    cur.execute("SELECT * FROM states WHERE name = %s ORDER BY id",
                (nm_search,))
    rows = cur.fetchall()

    for row in rows:
        print(row)
