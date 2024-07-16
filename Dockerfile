# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=20.15.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine

# Set working directory for all build stages.
WORKDIR /app

# Copy the app package and package-lock.json file
# COPY package*.json ./
# COPY server.js ./
# COPY gulpfile.js ./

# Copy local directories to the current local directory of our docker image (/app)
# COPY ./src ./src
# COPY ./test ./test
COPY . .

# Run the build script.
RUN npm install \
    && npm run build \
    && rm -fr node_modules
    
# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD npm run serve






