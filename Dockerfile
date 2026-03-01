# Stage 1: Dependencies
FROM oven/bun:latest AS dependencies

WORKDIR /app

COPY package.json bun.lockb* ./

RUN bun install --frozen-lockfile

# Stage 2: Builder
FROM oven/bun:latest AS builder

WORKDIR /app

# Copy dependencies from previous stage
COPY --from=dependencies /app/node_modules ./node_modules

# Copy source code
COPY . .

# Build the application
RUN bun run build

# Stage 3: Production - Using Node with serve
FROM node:18-alpine AS production

WORKDIR /app

# Install serve globally for production
RUN npm install -g serve

# Copy built application from builder
COPY --from=builder /app/dist ./dist

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

USER nextjs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (res) => { if (res.statusCode !== 200) throw new Error(res.statusCode) })"

# Start the application
CMD ["serve", "-s", "dist", "-l", "3000"]
