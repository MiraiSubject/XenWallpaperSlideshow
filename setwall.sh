#!/bin/bash
my_images=$(ls images/*.{jpg,png,jpeg} 2>%1 | cat)
resultingString=$'// Add the location of the images in here\nconst imageGallery = ['
for image in $my_images
do
    imageString="\"$image\","
    resultingString+=$imageString;
done
resultingString+="]"
echo "$resultingString" > wallpapers.js