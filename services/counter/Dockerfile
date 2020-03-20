FROM  node:13-alpine3.10
RUN mkdir -p /app/
COPY ./package.json /app/package.json
WORKDIR /app
RUN npm install
VOLUME /app
