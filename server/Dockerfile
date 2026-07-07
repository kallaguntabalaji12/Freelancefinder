FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY server/package.json server/package-lock.json ./
RUN npm install --production

# Copy app source
COPY server/ ./

# Environment variables
ENV MONGO_URI=mongodb://mongo:27017/Freelancing
ENV PORT=6001

EXPOSE 6001

CMD ["node", "index.js"]
