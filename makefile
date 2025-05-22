.PHONY: up down clear install update

# Commandes Docker pour le backend
up-backend:
	sudo docker compose -f backend/api/docker-compose.yml up -d --build

# Commandes Docker pour le frontend
up-frontend:
	sudo docker compose -f frontend/docker-compose.yml up -d --build

# Commandes combinées pour Docker
up: up-backend up-frontend

# Commandes pour arrêter les conteneurs Docker
down-backend:
	sudo docker compose -f backend/api/docker-compose.yml down

down-frontend:
	sudo docker compose -f frontend/docker-compose.yml down

down: down-backend down-frontend

# Nettoyer le système Docker
clear:
	docker system prune -a --volumes

# Commandes pour le backend
install-backend:
	cd backend/api && composer install

update-backend:
	cd backend/api && composer update

# Commandes pour le frontend
install-frontend:
	cd frontend && npm install

update-frontend:
	cd frontend && npm update

# Commandes combinées pour les dépendances
install: install-backend install-frontend

update: update-backend update-frontend
