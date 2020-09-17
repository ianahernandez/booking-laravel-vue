<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/room/reservation', 'ReservationController@index');
Route::post('/room/reservation', 'ReservationController@store');
Route::put('/room/reservation/{id}', 'ReservationController@update');
Route::delete('/room/reservation/{id}', 'ReservationController@destroy');
Route::get('/room/availability', 'ReservationController@availability');
Route::get('/typesRoom', 'TypeRoomController@index');
