FROM node:12.7-alpine

RUN npm set progress=false
RUN apk add --no-cache git
WORKDIR /usr/src/app

COPY package.json ./

COPY dist ./dist/

RUN npm install --only=production --no-optional --no-audit

EXPOSE 4008
EXPOSE 5008
CMD ["node", "dist/src/server.js"]
