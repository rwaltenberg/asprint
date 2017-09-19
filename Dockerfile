FROM node:8

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

# Updates yarn to the latest version

RUN npm i -gs yarn@v1.0.2

# Installs dependencies

RUN yarn

# Declaring folders as volume improves performance
# for file intensive operations, like SASS compilation
VOLUME $APP/.sass-cache

CMD ["yarn", "run", "watch"]