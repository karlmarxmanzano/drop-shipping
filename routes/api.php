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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => 'auth'], function () {
    Route::post('signin', 'AuthController@signin');
    Route::post('signup', 'AuthController@signup');
    Route::post('signout', 'AuthController@signout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');
});

Route::group(['prefix' => 'product'], function () {
    Route::get('list', 'ProductController@index');
    Route::get('details/{product}', 'ProductController@show');
    Route::post('create', 'ProductController@store');
    Route::post('edit/{product}', 'ProductController@update');
    Route::post('delete/{product}', 'ProductController@destroy');
});

Route::group(['prefix' => 'permissions'], function () {
    Route::get('list', 'PermissionController@index');
});

Route::group(['prefix' => 'roles'], function () {
    Route::get('list', 'RoleController@index');
});

Route::group(['prefix' => 'users'], function () {
    Route::get('list', 'UserController@index');
});