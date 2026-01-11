FROM php:8.4-fpm

# ----------------------------
# 1. Install system dependencies + Node.js + Redis extension
# ----------------------------
RUN apt-get update && apt-get install -y \
    git \
    curl \
    zip \
    unzip \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    gnupg2 \
    ca-certificates \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd \
    && pecl install redis \
    && docker-php-ext-enable redis

# ----------------------------
# 2. Install Composer
# ----------------------------
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# ----------------------------
# 3. Set working directory
# ----------------------------
WORKDIR /var/www

# ----------------------------
# 4. Copy Laravel project
# ----------------------------
COPY . .

# ----------------------------
# 5. Suppress PHP deprecation notices for CLI (Composer)
# ----------------------------
RUN echo "error_reporting=E_ALL & ~E_DEPRECATED & ~E_NOTICE" > /usr/local/etc/php/conf.d/docker-php-cli.ini

# ----------------------------
# 6. Install PHP dependencies
# ----------------------------
RUN composer install --no-interaction --prefer-dist

# ----------------------------
# 7. Set permissions for Laravel
# ----------------------------
RUN chown -R www-data:www-data /var/www \
    && chmod -R 775 /var/www/storage /var/www/bootstrap/cache

# ----------------------------
# 8. Expose PHP-FPM port
# ----------------------------
EXPOSE 9000

# ----------------------------
# 9. Start PHP-FPM
# ----------------------------
CMD ["php-fpm"]
