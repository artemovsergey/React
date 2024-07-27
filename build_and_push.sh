#!/bin/bash

# Собираем образы
docker-compose build #--no-cache --pull

echo "Login to dockerhub: "

docker login -u artik3314 -p Aa003314+
#docker tag $SERVICE artik3314/$SERVICE:latest

echo "Push service: "

docker tag nginx example-nginx:tag
docker push example-nginx:latest
