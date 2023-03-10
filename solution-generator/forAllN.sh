#!/usr/bin/env bash

size=$1

rm results*.txt 2>/dev/null

./start $1 | xargs -L1 -P0 ./gen > results1.txt

for (( i=1 ; i<=$size ; i++ ));
do
    echo $i
    time (cat results${i}.txt | xargs -L1 -P0 ./part | uniq > results$((i+1)).txt 2> /dev/null)

done

cat results${size}.txt | sort -n | uniq -c | sort -k 1n