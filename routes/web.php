<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return inertia('Home',['name'=>'Eth']);
});

Route::get('/about', function(){
    return Inertia::render('About/About');
});

Route::inertia('/contact', 'Contact/Contact');
