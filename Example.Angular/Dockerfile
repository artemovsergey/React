# Используем Node.js как базовый образ
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY Example.Angular/package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект в рабочую директорию
COPY ./Example.Angular .

# Собираем приложение
RUN npm run build --prod

# Устанавливаем Angular CLI глобально
RUN npm install -g @angular/cli

# Открываем порт 4200 для доступа к приложению
EXPOSE 4200

# Запускаем приложение с использованием Angular CLI
CMD ["ng", "serve", "--host", "0.0.0.0"]
