#!/bin/bash
echo "Go to project"
cd /home/artik3314/project/

echo "Stop all containers"
docker-compose -f docker-compose-production.yml down

echo "Update new version images"
docker-compose -f docker-compose-production.yml pull

echo "Поднятие контейнеров"
docker-compose -f docker-compose-production.yml up --build


# Проверяем статус контейнеров
while true; do
    CONTAINER_STATUS=$(docker inspect -f '{{json .State.Status}}' ContainerPgAdmin)
    if [[ "$CONTAINER_STATUS" == "\"running\"" ]]; then
        break
    fi
    sleep 1
done


docker ps


