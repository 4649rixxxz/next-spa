build:
	docker-compose build --no-cache --force-rm
up:
	docker-compose up -d 
create-project:
	@make build
	@make up
	@make next
destroy:
	docker-compose down --rmi all --volumes --remove-orphans
app:
	docker-compose exec app sh
next:
	docker-compose exec app sh -c "npx create-next-app@latest --ts ."
start:
	docker-compose start
stop:
	docker-compose stop
dev:
	docker-compose exec app sh -c "yarn dev"