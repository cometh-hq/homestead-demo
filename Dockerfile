# Use a Node.js base image
FROM node:18-alpine AS builder

# Install Python and other dependencies required for node-gyp
RUN apk update && apk add --no-cache python3 make g++ && ln -sf python3 /usr/bin/python

# Set the working directory
WORKDIR /app

# Copy dependency files
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install dependencies based on the package manager
RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm install --frozen-lockfile; \
  else echo "No lockfile found." && exit 1; \
  fi

# Copy the rest of the application code
COPY . .

# Build the static files for production
RUN yarn build

# Step to serve with nginx
FROM nginx:alpine AS production

# Copy the built files to nginx's default directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose the port where the application will run
EXPOSE 80

# Command to start nginx (default in nginx image)
CMD ["nginx", "-g", "daemon off;"]
