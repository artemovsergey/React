#!/bin/bash

# Собираем образы
docker-compose build #--no-cache --pull

# Получаем список сервисов из docker-compose.yml

echo "Building and pushing"
#docker login -u artik3314 -p Aa003314+
#docker tag $SERVICE artik3314/$SERVICE:latest
  #docker push $DOCKER_HUB_USERNAME/$SERVICE:latest
