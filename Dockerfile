# Build Environment
FROM node:16-alpine as build-stage

# Set environment variables
ARG ENVIRONMENT

# Set working directory
WORKDIR /usr/src/app

# Copy source
COPY . .

# Install and build
RUN npm install
RUN npm run build:$ENVIRONMENT

# Run Environment
FROM nginx:stable-alpine as production-stage

# Copy NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build result
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

# Run the application
CMD ["nginx", "-g", "daemon off;"]