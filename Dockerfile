FROM node:19-alpine3.16
EXPOSE 3000
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
CMD ["yarn", "start"]