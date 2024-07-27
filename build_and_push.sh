#!/bin/bash

# Собираем образы
docker-compose build --no-cache --pull

echo "Login to dockerhub: "

docker login -u artik3314 -p Aa003314+

echo "Images"
docker images

echo "Push service: "

docker push react_nginx:latest
