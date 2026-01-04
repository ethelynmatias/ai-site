build:
	@echo "Build docker"
	@docker compose build --no-cache

up:
	@echo "Setting up docker"
	@docker compose up -d

container:
	@echo "Accessing docker container"
	@docker compose exec app sh
