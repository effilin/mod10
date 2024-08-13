FROM node:19-alpine
WORKDIR /app
COPY . .
EXPOSE 3030
RUN npm install
CMD ["npm", "start"]
