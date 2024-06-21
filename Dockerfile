FROM node:20.1.0

WORKDIR /usr/src/app
COPY . .

RUN npm ci
RUN npm run build

ENV NODE_ENV production
EXPOSE 3000

CMD ["npm", "start"]
