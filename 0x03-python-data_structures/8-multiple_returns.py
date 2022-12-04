#!/usr/bin/python3
def multiple_returns(sentence):
    a = len(sentence)
    if a == 0:
        return(a, None)
    else:
        return(a, sentence[0])
