# Laravel Inertia React TypeScript SSR Project

Welcome to this project where we are learning and experimenting with **Inertia.js**, **React**, **TypeScript**, and **Inertia** with **SSR (Server-Side Rendering)** along with Laravel.

This project is designed to help you understand how to integrate modern JavaScript technologies like React and TypeScript into a Laravel backend using Inertia.js, while exploring tools like TailwindCSS, Vite, and Laravel Vite plugin.

## Features

-   **Inertia.js**: Seamlessly integrates modern front-end frameworks like React with a Laravel backend.
-   **React & TypeScript**: Utilizing the power of React for interactive UIs and TypeScript for type safety.
-   **SSR with Inertia**: Explore Server-Side Rendering with Inertia.js for better performance and SEO.
-   **TailwindCSS**: Rapidly build custom designs with utility-first CSS framework.
-   **Vite**: Fast modern build tool for development and production.
-   **Spatie Laravel Permission**: Implement role and permission management in your Laravel app.
-   **Sanctum Authentication**: Simple API token authentication for single-page apps (SPA).

## Project Setup

### Prerequisites

Ensure you have the following installed:

-   PHP 8.2 or higher
-   Node.js (>=18.x)
-   Composer (for Laravel dependencies)
-   NPM or Yarn (for JavaScript dependencies)

### Clone the Repository

```sh
git clone https://github.com/shahriarabiddut/Laravel-Inertia-React-SSR
cd Laravel-Inertia-React-SSR or cd <project-directory>
```

### Install Laravel Dependencies

First, install the PHP dependencies using Composer:

```sh
composer install
```

### Install JavaScript Dependencies

Next, install the necessary JavaScript dependencies via npm (or yarn):

```sh
npm install
```

### Set Up Environment Variables

Copy the `.env.example` to `.env` and configure the database and other environment settings:

```sh
cp .env.example .env
```

Then, set your database and other environment variables in `.env`.

### Generate Application Key

Generate a new application key:

```sh
php artisan key:generate
```

### Migrate the Database

Run migrations to set up the database:

```sh
php artisan migrate
```

### Install and Publish Laravel Permissions (Optional)

If you plan to use Spatie's Laravel Permission package, run:

```sh
php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"
php artisan migrate
```

### Running the Development Servers

For local development, you'll be running both the Laravel PHP server and the React/Vite development server.

#### Run the Laravel Development Server

```sh
php artisan serve
```

This will start the backend API on http://localhost:8000.

#### Run the Vite Development Server for React

In a separate terminal, run the Vite development server:

```sh
npm run dev
```

This will start the React frontend on http://localhost:3000.

## Available Scripts

### Development

#### Run Laravel Backend:

```sh
php artisan serve
```

#### Run React + Vite Frontend:

```sh
npm run dev
```

### Build for Production

To build the assets for production, use the following commands:

```sh
npm run build
php artisan optimize
```

## Dependencies

### Required

-   **PHP**: ^8.2
-   **Inertia.js (Laravel Adapter)**: ^2.0
-   **Laravel Framework**: ^11.31
-   **Laravel Sanctum**: ^4.0
-   **Spatie Laravel Permission**: \*
-   **Tightenco Ziggy**: ^2.0

### Development Dependencies

-   **Laravel Breeze**: ^2.3
-   **Laravel Sail**: ^1.26
-   **Laravel Pint**: ^1.13
-   **Vite**: ^6.0.11
-   **React**: ^18.2.0
-   **TypeScript**: ^5.0.2
-   **TailwindCSS**: ^3.2.1
-   **Autoprefixer**: ^10.4.12
-   **Axios**: ^1.7.4
-   **Concurrently**: ^9.0.1

## Learning Resources

Here are some great resources for learning the technologies used in this project:

-   [Inertia.js Docs](https://inertiajs.com/)
-   [React Docs](https://react.dev/)
-   [Laravel Docs](https://laravel.com/docs/)
-   [TypeScript Docs](https://www.typescriptlang.org/docs/)
-   [TailwindCSS Docs](https://tailwindcss.com/docs/)

## License

This project is open-source and available under the MIT License.

## Contributing

We welcome contributions to this project! Please feel free to fork the repository, create a pull request, and contribute to improving the codebase.

## Credits

This project was created to explore Inertia.js with Laravel, React, and TypeScript. Special thanks to the following:

-   **Spatie** for the Laravel Permission package.
-   **Inertia.js** for the awesome Inertia framework.
-   **TailwindCSS** for the utility-first CSS framework.
-   **Vite** for the fast and modern build tool.
-   **Codeholic** - One of the Best Laravel Teaching Youtube Channel.
