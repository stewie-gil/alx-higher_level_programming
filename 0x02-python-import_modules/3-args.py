#!/usr/bin/python3
if __name__ == "__main__":
    import sys
    a = len(sys.argv)
    b = 1
    if (a == 1):
        print("{} arguments.".format(0))
    elif (a == 2):
        print("{} argument:".format(1))
        print("{} : {:s}".format(1, sys.argv[1]))
    elif (a > 2):
        print("{} arguments:".format(a - 1))
        for i in sys.argv:
            while b < a:
                print("{} : {:s}".format(b, sys.argv[b]))
                b += 1
