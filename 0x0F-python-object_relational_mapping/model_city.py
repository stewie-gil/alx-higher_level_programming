#!/usr/bin/python3
from model_state import Base
from sqlalchemy import Column, Integer, String, ForeignKey

class City(Base):
    __tablename__ = 'cities'
    id = Column(Integer, autoincrement=True, nullable=False, primary_key=True)
    name = Column(String(0), nullable=False)
    state_id = Column(Integer, nullable=False, ForeignKey('states.id'))
    
