# Use an official Node.js runtime as a parent image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the React app
RUN npm run build

# Install serve to serve the production build
RUN npm install -g serve

# Expose the port
EXPOSE 8083

# Command to serve the build
CMD ["serve", "-s", "build", "-l", "8083"]
