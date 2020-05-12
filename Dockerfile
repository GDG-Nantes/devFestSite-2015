FROM zenika/alpine-node

WORKDIR /usr/src/app
COPY package.json ./
RUN npm i
RUN npm i -g gulp
COPY . ./

RUN gulp
