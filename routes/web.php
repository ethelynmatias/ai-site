<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use Inertia\Inertia;

Route::get('/', function () {
    return inertia('Home',['name'=>'Eth']);
});

Route::get('/about', function(){
    return Inertia::render('About/About');
});

Route::resource('contacts', ContactController::class);

//Route::inertia('/contact', 'Contact/Contact');
