# Stage 1: Build the React application
FROM node:18-slim AS builder

WORKDIR /app

COPY package*.json ./
# Use legacy-peer-deps to resolve peer dependency conflicts during image build
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:1.14.2

# Change 'build' to 'dist' for Vite
COPY --from=builder /app/dist /usr/share/nginx/html



EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]