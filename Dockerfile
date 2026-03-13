FROM node:20-alpine

WORKDIR /app
COPY package.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npx next build

EXPOSE 3000
ENV PORT=3000
CMD ["npx", "next", "start"]
