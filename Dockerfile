FROM node:18-alpine
RUN apk update && apk upgrade
RUN apk add --no-cache openssl
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . . 
EXPOSE 3000
RUN npm run build # Outputs to '/app/dist' 
CMD ["sh", "-c", "npm run migrate:develop && npm start"]
