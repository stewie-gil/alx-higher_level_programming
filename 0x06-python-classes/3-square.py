#!/usr/bin/python3
"""Square module
this module contains a class that defines a square"""


class Square:

    """Defines a square """
    def area(self):
        return self.__size**2

    def __init__(self, size=0):
        self.__size = size
        if type(self.__size) != int:
            raise TypeError("size must be an integer")
        if self.__size < 0:
            raise ValueError("size must be >= 0")
