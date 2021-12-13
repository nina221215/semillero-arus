FROM node
WORKDIR /app
COPY package.json package.json
RUN npm install node_modules
COPY . /app
EXPOSE 6000
CMD npm [“npm”,“start”]