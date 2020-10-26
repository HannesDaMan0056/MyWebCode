FROM nginx:1.19.3-alpine

RUN rm -rf /usr/share/nginx/html
RUN mkdir -p /usr/share/nginx/html
COPY --chown=root favicon.ico /usr/share/nginx/html/favicon.ico
COPY --chown=root pages /usr/share/nginx/html/pages
COPY --chown=root assets /usr/share/nginx/html/assets
COPY --chown=root My-agency2-mp.html /usr/share/nginx/html/index.html
COPY --chown=root My-agency2-mp.html /usr/share/nginx/html/My-agency2-mp.html
RUN chmod 755 -R /usr/share/nginx/html

