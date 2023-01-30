#!/usr/bin/env bash

size=$1

rm results*.txt 2>/dev/null

./gen "$@" > results1.txt

for (( i=1 ; i<=$size ; i++ ));
do
    echo $'\n'$i
    time (cat results${i}.txt | sort -u | xargs -L1 -P0 ./part  > results$((i+1)).txt 2> /dev/null)
done

echo $'\n'
#cat results${size}.txt | sort -n | uniq -c | sort -k 1n
cat results${size}.txt | sort -nu > results-final.txt
cat results-final.txt