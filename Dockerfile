# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the Docker container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the project
RUN npm run build

# Expose port 5000 for the application
EXPOSE 5000

# Install serve to serve the built files
RUN npm install -g serve

# Serve the built files
CMD ["serve", "-s", "dist", "-l", "5000"]