#!/usr/bin/python3
"""
script that lists all state objects that contain letter a from the database
"""
from model_state import Base, State
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import sys

if __name__ == "__main__":
    a = sys.argv[1]
    b = sys.argv[2]
    c = sys.argv[3]
    lc = 'localhost'
    msa = 'mysql+mysqldb://{}:{}@{}/{}'
    engine = create_engine(msa.format(a, b, lc, c), pool_pre_ping=True)
    Session = sessionmaker(bind=engine)
    session = Session()

    a = session.query(State).filter_by(name=sys.argv[4]).all()

    if a:
        for i in a:
            print("{}".format(i.id))
    else:
        print("Not found")
