#!/usr/bin/python3
"""Square module.et or get it."""


class Square:
    """Defines a square"""
    def area(self):
        return self._size**2

    def __init__(self, size=0):
        self._size = size

    @property
    def size(self):
        return self._size

    @size.setter
    def size(self, value):
        if type(value) != int:
            raise TypeError("size must be an integer")
        if value < 0:
            raise ValueError("size must be >= 0")
        self._size = value
