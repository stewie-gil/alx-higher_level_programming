#!/usr/bin/python3
"""
Script that lists all states from the database hbt
Arguements:
  mysl username (str)
  mysql password (str)
  database-name (str)
"""
import sys
import MySQLdb

if __name__ == "__main__":
    u_nme = sys.argv[1]
    pss = sys.argv[2]
    db_name = sys.argv[3]

    # by default it will connect to localhost:3306
    db = MySQLdb.connect(user=u_nme, password=pss, database=db_name)
    cur = db.cursor()

    cur.execute("""SELECT * FROM states ORDER BY id""")
    record = cur.fetchall()
    for row in record:
        print(row)
