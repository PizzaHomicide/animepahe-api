FROM mcr.microsoft.com/playwright:v1.52.0-jammy

ENV NODE_ENV=production \
    PORT=3000 \
    CHROME_HEADLESS=true

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
