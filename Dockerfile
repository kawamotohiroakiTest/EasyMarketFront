# Use the official lightweight Node.js 14 image.
# https://hub.docker.com/_/node
FROM --platform=linux/x86_64 node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json, package-lock.json, and next.config.js files
COPY package*.json next.config.js ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build your Next.js app
RUN npm run build

# Expose the port your app runs on
EXPOSE 80



# Command to run your app using Node.js
CMD ["npm", "run", "start"]
