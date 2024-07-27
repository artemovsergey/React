#!/bin/bash

# Собираем образы
docker-compose build --no-cache --pull

echo "Login to dockerhub: "

export USERNAME=$USERNAME
export PASSWORD=$PASSWORD
docker login -u $USERNAME -p $PASSWORD

echo "Images"
docker images

echo "Push service: "

docker push react_nginx:latest
