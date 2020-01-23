FROM node:10-alpine AS build

WORKDIR /home/front

RUN     apk add --no-cache git

COPY ./package-prod.json /home/front/package.json
COPY ./packages /home/front/packages
RUN for file in $(ls -l packages/. | awk '{ print $9 }' | grep -e '[^common]'); do cd packages/$file && npm i && cd ../../; done

RUN npm i

COPY ./tsconfig.json /home/front/
COPY ./tslint.json /home/front/
COPY ./webpack /home/front/webpack
COPY ./public /home/front/public
COPY ./src /home/front/src

ARG BACKEND_WS_PROTOCOL
ARG BACKEND_WS_HOST
ARG BACKEND_WS_PORT

ENV BACKEND_WS_PROTOCOL="$BACKEND_WS_PROTOCOL"
ENV BACKEND_WS_HOST="$BACKEND_WS_HOST"
ENV BACKEND_WS_PORT="$BACKEND_WS_PORT"

RUN npm run build

FROM nginx

WORKDIR /home/front

COPY --from=build /home/front/dist /home/front/dist
