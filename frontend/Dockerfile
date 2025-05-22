# Utilise une image Node.js LTS basée sur Alpine
FROM node:lts-alpine

# Installe un simple serveur HTTP pour servir un contenu statique
RUN npm install -g http-server

# Définit le dossier '/app' comme dossier de travail
WORKDIR /app

# Copie 'package.json' et 'package-lock.json' (si disponible)
COPY package*.json ./

# Installe les dépendances du projet
RUN npm install

# Copie les fichiers et dossiers du projet dans le dossier de travail
COPY . .

# Construit l'app pour la production en la minifiant
RUN npm run build

# Expose le port 3000
EXPOSE 3000

# Commande pour démarrer le serveur HTTP
CMD ["http-server", "dist", "-p", "3000"]
