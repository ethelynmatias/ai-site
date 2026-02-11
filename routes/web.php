<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\SubscribeController;
use Inertia\Inertia;

Route::get('/', function () {
    sleep(1);
    return inertia('Home',['name'=>'Eth']);
});

Route::get('/about', function(){
    return Inertia::render('About/About');
});

Route::resource('contacts', ContactController::class);
Route::resource('subscriptions', SubscribeController::class)
    ->only(['index', 'create', 'store']);

//Route::get('/subscriptions', [SubscribeController::class, 'index'])->name('subscriptions.index');

//Route::inertia('/contact', 'Contact/Contact');
// Any route redirect to welcome
Route::any('{slug}', function(){
   return inertia('Home',['name'=>'Eth']);
}); //->when()
