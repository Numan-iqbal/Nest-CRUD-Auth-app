FROM node:16

# Create app directory
WORKDIR /numan/src/app


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production


# Bundle app source
COPY . .

EXPOSE 8080

RUN npm run build

CMD [ "node", "dist/main" ]





















# FROM node:14-alpine AS build

# WORKDIR /app

# COPY package*.json ./
# RUN npm install
# COPY . .

# RUN npm run build

# FROM node:14-alpine AS production
# ENV NODE_ENV=production

# WORKDIR /app

# COPY package*.json ./
# RUN npm install --only=production

# COPY --from=build /app/dist ./dist

# CMD ["npm", "run", "start:prod"]
