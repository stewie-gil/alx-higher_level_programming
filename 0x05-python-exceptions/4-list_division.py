#!/usr/bin/python3
def list_division(my_list_1, my_list_2, list_length):
    i = 0
    list3=[]
    while i < list_length:
        try:
            list3 += [my_list_1[i] / my_list_2[i]]
            i += 1
        except TypeError:
            list3 += [0]
            print("wrong type")
            i += 1
            continue
        except ZeroDivisionError:
            print("division by 0")
            i += 1
            list3 += [0]
            continue
        except IndexError:
            print("out of range")
            list3 += [0]
            break
        finally:
            print(end='')
            
    return list3
            
