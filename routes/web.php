<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use Inertia\Inertia;

Route::get('/', function () {
    sleep(1);
    return inertia('Home',['name'=>'Eth']);
});

Route::get('/about', function(){
    return Inertia::render('About/About');
});

Route::resource('contacts', ContactController::class);

//Route::inertia('/contact', 'Contact/Contact');
// Any route redirect to welcome
Route::any('{slug}', function(){
   return inertia('Home',['name'=>'Eth']);
}); //->when()
