FROM node:16-alpine3.15 as dev-deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:16-alpine3.15 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

FROM nginx:1.23.3 as prod
EXPOSE 80

COPY --from=builder /app/dist/dash-board /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
