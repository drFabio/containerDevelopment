FROM node:13-alpine3.10
RUN mkdir -p /app/ourApp/
COPY ./nodeCounter.js  /app/ourApp/
WORKDIR  /app/ourApp/
<<<<<<< HEAD
VOLUME /app/ourApp/data/
CMD node ./nodeCounter.js
=======
VOLUME /app/ourApp
CMD node ./nodeCounter.js
>>>>>>> Added files to run the container
