# Project Setup Guide

## Prerequisites
Ensure you have the following installed on your system:

  - Docker
  - PHP 8.2
  - Node.js v20
  - Composer
  - Yarn

## Clone the Repository

First, Create a folder to organize the project

Second, clone the project repository inside the folder you created:

```sh
git clone (https://github.com/Ryal02/CRM_ONLINE_ASSESSMENT.git)
```

## Project Structure

project-folder/

  │── backend/           # Laravel API

  │── frontend/          # React/Vue Frontend

  │── nginx/             # Nginx Configuration

  │── docker-compose.yml


## Start the application

### Navigate to the project root
```sh
cd project-folder
```

### Run Docker Compose
```sh
docker-compose up -d --build
```

### Check running Docker containers if running
```sh
docker ps
```

## Backend Setup

### Access the Laravel API container
```sh
docker exec -it laravel_api bash
```

### OR change directory to the backend folder:
```sh
cd backend
```

## Install dependencies
```sh
composer install && php artisan
```
### To Check Laravel installation

## Set up authentication (Laravel Sanctum)

```sh
composer require laravel/sanctum
```
```sh
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
```
```sh
php artisan migrate
```
```sh
php artisan key:generate
```
```sh
php artisan db:seed
```

### For customer account
```sh
php artisan db:seed --class=CustomerSeeder
```

### For uni test
```
php artisan test
```
