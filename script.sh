#!/usr/bin/env bash

size=$1

echo "Size: $size"

for (( i=1 ; i<=$size ; i++ ));
do
    rm results$((i)).txt 2> /dev/null
done

./start $1 | xargs -L1 ./gen > results1.txt

for (( i=1 ; i<=$size ; i++ ));
do
    echo $i
    cat results${i}.txt | xargs -L1 -P0 ./part > results$((i+1)).txt
done