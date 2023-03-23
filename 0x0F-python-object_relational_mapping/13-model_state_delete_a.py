#!/usr/bin/python3
"""
Adding a new state to our database with MySQLAlchemy
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
    objs = session.query(State).filter(State.name.like("%a%")).all()

    for obj in objs:
        session.delete(obj)
    session.commit()
