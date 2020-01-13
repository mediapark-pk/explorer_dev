FROM    node:10-alpine

WORKDIR /home/backend

RUN     apk add --no-cache git

RUN npm i npm@latest -g
COPY ./package.json /home/backend/package.json
RUN sed -i 's/\.\./\./g' package.json
COPY ./packages /home/backend/packages
RUN npm i

COPY ./tsconfig.json /home/backend/
RUN sed -i 's/\.\./\./g' tsconfig.json
COPY ./tslint.json /home/backend/
#COPY ./webpack /home/backend/webpack
COPY ./src /home/backend/src

#RUN npm run build
CMD ['npm', 'run', 'prod']
