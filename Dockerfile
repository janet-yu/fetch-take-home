FROM node:slim
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 5500
CMD npm run start
