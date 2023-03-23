#!/usr/bin/python3
"""
State module contains state class that inherits from base = declartive base()
"""
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String

Base = declarative_base()


class State(Base):
    """
    This class links to the state table of our database
    
    Attributes:
    id(int): id of the state,
    name(str): name of the state
    """

    __tablename__ = 'states'

    id = Column(Integer, autoincrement=True, nullable=False, primary_key=True)
    name = Column(String(128), nullable=False)
