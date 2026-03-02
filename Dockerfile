# Stage 1: Build the React application
FROM node:18-slim AS builder

WORKDIR /app

# Declare build args
ARG VITE_API_URL
ARG VITE_STORAGE_URL

# Expose them as environment variables so Vite can read them
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_STORAGE_URL=$VITE_STORAGE_URL

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.14.2
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]