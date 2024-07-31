FROM nginx:alpine
RUN apk add --no-cache openssl

# SSL
RUN mkdir -p /etc/nginx/ssl


COPY ./certificate/asvapp.crt /etc/nginx/ssl/asvapp.crt
COPY ./certificate/asvapp.key /etc/nginx/ssl/asvapp.key

COPY ./certificate/localhost.crt /etc/nginx/ssl/localhost.crt
COPY ./certificate/localhost.key /etc/nginx/ssl/localhost.key
COPY ./certificate/localhost_full.crt /etc/nginx/ssl/localhost_full.crt

#RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/nginx-selfsigned.key -out /etc/nginx/ssl/nginx-selfsigned.crt -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=localhost"
#RUN openssl req -x509 -newkey rsa:4096 -keyout localhost.key -out localhost.crt -days 365 -nodes

COPY ./loadbalancer/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
