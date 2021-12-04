FROM nginx:1.15-alpine
COPY html /etc/nginx/html
COPY conf /etc/nginx/
WORKDIR /etc/nginx/html