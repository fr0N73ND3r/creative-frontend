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

4. Запустите коммпанды

``` bash
docker-compose run app npm npm install
# или
# make app-install

docker-compose up -d
# или
# make up
```

Приложение доступно по адресу [localhost:3000][1]

## Сборка приложения

``` bash
docker-compose run app npm build
# или
# make build
```

## Остановка приложения

1. Запустите команду

``` bash
docker-compose down --remove-orphans
# или
# make down
```

[1]: http://localhost:3000