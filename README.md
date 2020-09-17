### About this project

This project is a test for show knoledge about Laravel and Vuejs.
It uses Laravel 8 and Vue 2.5.17

### Prerequisites
- PHP >= 7.3
- BCMath PHP Extension
- Ctype PHP Extension
- Fileinfo PHP extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- Postgres 10^
- Node^10
- npm^6

### Getting Starter

- Clone this project.
- Create a database with name 'booking'
- If your postgres credentials are differents that user: postgres and password: postgres, please, edit (.env) file and enter your credentials in DB_USERNAME=YOUR_USERNAME DB_PASSWORD=YOUR_PASSWORD
- Run php artisan serve
- Run php artisan migrate
- Run php artisan db:seed
- Run npm run watch
- Enter on http://127.0.0.1:8000

### Using API

I have developed an API REST with this endpoints:

- GET: /api/room/availability: Gets the availability for a room type for a set of days
- POST:/api/room/reservation:	Makes a reservation for a room
- PUT: /api/room/reservation: Updates an existing reservation
- DELETE: /api/room/reservation: Deletes an existing reservation

## License

This project is open-sourced and licensed under the [MIT license](https://opensource.org/licenses/MIT).
