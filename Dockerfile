# Stage 1: Build the React app using Vite
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite app for production
RUN npm run build

# Debugging: Check the contents of the dist folder
RUN ls -la /app/dist

# Stage 2: Serve with Nginx
FROM nginx:1.25

# Clean the default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built Vite files to the Nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]