#!/bin/bash

# Allows us to read user input below, assigns stdin to keyboard
exec < /dev/tty

    echo "Have you updated or added files in the src folder? [y/n]";
    read hasModifiedSrc;
while true; do

    if [[ $hasModifiedSrc == 'y' ]]; then
        break
    elif [[ $hasModifiedSrc == 'n' ]]; then
        break
    else
        echo 'please input y or n'
    fi
done

if [[ $hasModifiedSrc == 'y' ]]; then
    while true; do
        echo "Have you updated corresponding README.md? [y/n]";
        read hasUpdatedReadme;

        if [[ $hasUpdatedReadme == 'y' ]]; then
            break
        elif [[ $hasUpdatedReadme == 'n' ]]; then
            exit 1 # break push
        else
            echo 'please input y or n'
        fi
    done
fi
