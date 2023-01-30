#!/usr/bin/env bash

g++ generator1.cpp
mv a.out start

g++ generator2.cpp
mv a.out gen

g++ partition.cpp
mv a.out part

chmod +x givenN.sh
chmod +x forAllN.sh