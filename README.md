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

  │── backend/           # Laravel Framework v12.3.0 API

  │── frontend/          # React v19 Frontend

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
## Install composer and dependencies inside docker

### All command must have ```docker exec -it laravel_api```

### Like
```sh
docker exec -it laravel_api composer install
```
```sh
docker exec -it laravel_api php artisan, 
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

```sh
php artisan customers:reindex
```

## FOR DATABASE ACCESS
### Run the following command
```sh
docker exec -it mysql_db mysql -u user -p password
```
## Front end set up

### Navigate to the frontend directory
```sh
  yarn install or yarn add
```

### To start the application run:
```sh
  yarn dev
```

# FINAL STEPS

### After setting up both backend and frontend, you can now access your application in the browser.

- API should be running at http://localhost:8005
- Frontend should be running at http://localhost:5173 ( Add env variable: VITE_API_URL=http://localhost:8005/api/ )
- Look envsample for env variables
## Use seeder account to login if ever authentication is need

### Email : - admin@example.com
### Password : - password
