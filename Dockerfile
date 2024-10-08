FROM node:20-slim
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app
COPY package.json .
RUN pnpm install

COPY . .

EXPOSE 3001

CMD pnpm dev