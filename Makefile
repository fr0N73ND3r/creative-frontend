DC=docker-compose

up:
	$(DC) up -d

down:
	$(DC) down --remove-orphans

restart: down up
