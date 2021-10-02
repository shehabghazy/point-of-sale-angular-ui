# Point of Sale - [Angular](https://angular.io)

## Features
- User management 
  - Roles (Manager, Economist, User)
  - Login
  - Register
  - Settings
  - Profile
- Products management 
  - Products CRUD
  - Product categories CRUD
- Statistics dashboard
  - Daily sales
  - Invoices stats
  - Most sold products
  - Sales by category
  - Products below minimum stock
- Invoice management
  - Invoice CRUD
  - Invoce printing
- Shifts management
- Supplies management

## App architecture
- Every features lives in it's own module that is lazy loaded 
- We make use of smart-dumb component architecture
- State lives in services with BehaviorSubjects
- App uses [Angular Material components](https://material.angular.io)

## Development server

Run `ng serve` for a dev server. 

Navigate to `http://localhost:4200/`. 

The app will automatically reload if you change any of the source files.

## Backend Repo
Find the backend code here: [Point of sale Laravel API](https://github.com/eneajaho/point-of-sale-laravel).
