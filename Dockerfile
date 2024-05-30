# pull the Node.js Docker image
FROM archlinux

RUN pacman -Syu --noconfirm
RUN pacman -Sy nodejs --noconfirm

RUN pacman -Sy yarn --noconfirm
RUN pacman -Sy npm --noconfirm
RUN npm install -g npm@10.8.1

# create the directory inside the container
WORKDIR /usr/app

# copy the package.json files from local machine to the workdir in container
COPY package*.json ./

RUN npm install

# copy the generated modules and all other files to the container
COPY . ./

RUN npm run generate:blog
RUN npm run generate:store
RUN npm run build

# our app is running on port 5000 within the container, so need to expose it
EXPOSE 3001

# the command that starts our app
CMD ["node", "dist/src/main.js"]