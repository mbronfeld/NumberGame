#!/usr/bin/env bash

size=$1

#echo "Size: $size"

for (( i=1 ; i<=$size+1 ; i++ ));
do
    rm results$((i)).txt 2> /dev/null
done

./start $1 | xargs -L1 -P0 ./gen > results1.txt

for (( i=1 ; i<=$size ; i++ ));
do
    echo $i
    time (cat results${i}.txt | xargs -L1 -P0 ./part | uniq > results$((i+1)).txt 2> /dev/null)

done