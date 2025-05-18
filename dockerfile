FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npx tsc 

FROM node:alpine AS produccion

WORKDIR /app

COPY --from=builder /app/package*.json ./


RUN npm install

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/server.js"]
