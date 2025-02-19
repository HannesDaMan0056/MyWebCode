FROM node:16.14.0 as builder
WORKDIR /workspace/app

COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.24.0-alpine3.17-slim

ENV USER_NAME root

RUN rm -rf /usr/share/nginx/html
RUN mkdir -p /usr/share/nginx/html
COPY --chown=$USER_NAME Definity_MultipurposeOne-MultiPageTemplate/Definity/nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=$USER_NAME Definity_MultipurposeOne-MultiPageTemplate/Definity/favicon.ico /usr/share/nginx/html/favicon.ico
COPY --chown=$USER_NAME Definity_MultipurposeOne-MultiPageTemplate/Definity/pages /usr/share/nginx/html/pages
COPY --chown=$USER_NAME Definity_MultipurposeOne-MultiPageTemplate/Definity/assets /usr/share/nginx/html/assets
COPY --chown=$USER_NAME Definity_MultipurposeOne-MultiPageTemplate/Definity/documents /usr/share/nginx/html/documents
COPY --chown=$USER_NAME Definity_MultipurposeOne-MultiPageTemplate/Definity/index.html /usr/share/nginx/html/index.html

#old pages
COPY --chown=$USER_NAME Definity_MultipurposeOne-MultiPageTemplate/Definity/client.html /usr/share/nginx/html/client.html
COPY --chown=$USER_NAME Definity_MultipurposeOne-MultiPageTemplate/Definity/home-consultant.html /usr/share/nginx/html/home-consultant.html
COPY --chown=$USER_NAME Definity_MultipurposeOne-MultiPageTemplate/Definity/senior-consultant.html /usr/share/nginx/html/senior-consultant.html
COPY --chown=$USER_NAME Definity_MultipurposeOne-MultiPageTemplate/Definity/partnerships.html /usr/share/nginx/html/partnerships.html
COPY --chown=$USER_NAME Definity_MultipurposeOne-MultiPageTemplate/Definity/business_network.html /usr/share/nginx/html/business_network.html
COPY --chown=$USER_NAME Definity_MultipurposeOne-MultiPageTemplate/Definity/platform.html /usr/share/nginx/html/platform.html

#new pages
COPY --chown=$USER_NAME Definity_MultipurposeOne-MultiPageTemplate/Definity/consultancy.html /usr/share/nginx/html/consultancy.html
COPY --chown=$USER_NAME Definity_MultipurposeOne-MultiPageTemplate/Definity/consultant.html /usr/share/nginx/html/home-consultant.html
COPY --chown=$USER_NAME Definity_MultipurposeOne-MultiPageTemplate/Definity/about_us.html /usr/share/nginx/html/about_us.html
COPY --chown=$USER_NAME --from=builder /workspace/app/build/blog /usr/share/nginx/html/blog
COPY --chown=$USER_NAME --from=builder /workspace/app/build/_app /usr/share/nginx/html/_app
COPY --chown=$USER_NAME --from=builder /workspace/app/build/blog.html /usr/share/nginx/html/blog/index.html

RUN chmod 755 -R /usr/share/nginx/html

    
