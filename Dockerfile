FROM nginx:1.24.0-alpine3.17-slim

RUN rm -rf /usr/share/nginx/html
RUN mkdir -p /usr/share/nginx/html
COPY Definity_MultipurposeOne-MultiPageTemplate/Definity/nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=root Definity_MultipurposeOne-MultiPageTemplate/Definity/favicon.ico /usr/share/nginx/html/favicon.ico
COPY --chown=root Definity_MultipurposeOne-MultiPageTemplate/Definity/pages /usr/share/nginx/html/pages
COPY --chown=root Definity_MultipurposeOne-MultiPageTemplate/Definity/assets /usr/share/nginx/html/assets
COPY --chown=root Definity_MultipurposeOne-MultiPageTemplate/Definity/documents /usr/share/nginx/html/documents
COPY --chown=root Definity_MultipurposeOne-MultiPageTemplate/Definity/index.html /usr/share/nginx/html/index.html
COPY --chown=root Definity_MultipurposeOne-MultiPageTemplate/Definity/index.html /usr/share/nginx/html/home.html
COPY --chown=root Definity_MultipurposeOne-MultiPageTemplate/Definity/client.html /usr/share/nginx/html/client.html
COPY --chown=root Definity_MultipurposeOne-MultiPageTemplate/Definity/home-consultant.html /usr/share/nginx/html/home-consultant.html
COPY --chown=root Definity_MultipurposeOne-MultiPageTemplate/Definity/senior-consultant.html /usr/share/nginx/html/senior-consultant.html
COPY --chown=root build/blog /usr/share/nginx/html/blog
COPY --chown=root build/_app /usr/share/nginx/html/_app
COPY --chown=root build/images /usr/share/nginx/html/images
COPY --chown=root build/g /usr/share/nginx/html/blog/g

RUN chmod 755 -R /usr/share/nginx/html

    
