#!/bin/bash

# Собираем образы
docker-compose build #--no-cache --pull

echo "Login to dockerhub: "

docker login -u artik3314 -p Aa003314+ docker.io

echo "Images"
docker images

echo "Push service: "

docker tag react react_nginx:latest
docker push react_nginx:latest
