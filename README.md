# creative-frontend
Домашнее задание

## Запуск приложения

1. Клонируйте приложение

```
git clone git@github.com:fr0N73ND3r/creative-react.git
```

2. Перейдите в папку

```
cd creative-react
```

3. Скопируйте env

```
cp .env.dist .env
```

4. Запустите коммпанду

``` bash
docker-compose up -d
# или
# make up
```

Приложение доступно по адресу [localhost:8080][1]

## Остановка приложения

1. Запустите коммпанду

``` bash
docker-compose down --remove-orphans
# или
# make down
```

[1]: http://localhost:8080