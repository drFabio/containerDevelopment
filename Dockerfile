FROM node:13-alpine3.10
RUN mkdir -p /app/ourApp/
COPY ./nodeCounter.js  /app/ourApp/
WORKDIR  /app/ourApp/
VOLUME /app/ourApp/data/
CMD node ./nodeCounter.js