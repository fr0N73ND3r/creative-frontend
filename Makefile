DC=docker-compose
APP_NAME=app

app-install:
	$(DC) run $(APP_NAME) npm install

up:
	$(DC) up -d

down:
	$(DC) down --remove-orphans

restart: down up

build: app-install
	$(DC) run $(APP_NAME) npm run-script build

jump-in:
	$(DC) exec $(APP_NAME) sh