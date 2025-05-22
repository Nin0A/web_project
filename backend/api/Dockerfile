FROM php:8.3-cli

# Installer les extensions nécessaires pour Composer
RUN apt-get update && apt-get install -y \
    unzip \
    git \
    libzip-dev \
    libpq-dev \
    default-mysql-client \
    && docker-php-ext-install zip pdo pdo_mysql pdo_pgsql
WORKDIR /var/php

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Mettre à jour Composer
RUN composer self-update

# Copier les fichiers de l'application
COPY . .

# Installer les dépendances PHP via Composer
RUN composer install

# Commande pour démarrer le serveur PHP intégré
CMD ["php", "-S", "0.0.0.0:80", "-t", "public"]