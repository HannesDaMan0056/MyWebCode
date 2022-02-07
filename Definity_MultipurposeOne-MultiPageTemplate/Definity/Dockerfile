FROM nginx:1.19.3-alpine

RUN rm -rf /usr/share/nginx/html
RUN mkdir -p /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=root favicon.ico /usr/share/nginx/html/favicon.ico
COPY --chown=root pages /usr/share/nginx/html/pages
COPY --chown=root assets /usr/share/nginx/html/assets
COPY --chown=root index.html /usr/share/nginx/html/index.html
COPY --chown=root index.html /usr/share/nginx/html/home.html
COPY --chown=root client.html /usr/share/nginx/html/client.html
COPY --chown=root home-consultant.html /usr/share/nginx/html/home-consultant.html
COPY --chown=root senior-consultant.html /usr/share/nginx/html/senior-consultant.html
RUN chmod 755 -R /usr/share/nginx/html

    
