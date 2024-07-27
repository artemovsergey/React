#!/bin/bash

chmod +x "$0"
# Собираем образы
docker-compose build #--no-cache --pull

# Получаем список сервисов из docker-compose.yml
SERVICES=$(grep -oP '^\s*\K\w+' docker-compose.yml)

for SERVICE in ${SERVICES}; do
  echo "Building and pushing ${SERVICE}..."
  docker login -u artik3314 -p Aa003314+
  #docker tag $SERVICE $DOCKER_HUB_USERNAME/$SERVICE:latest
  #docker push $DOCKER_HUB_USERNAME/$SERVICE:latest
done