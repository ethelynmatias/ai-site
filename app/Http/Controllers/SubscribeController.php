<?php

namespace App\Http\Controllers;
use App\Models\Subscription;
use Illuminate\Http\Request;

class SubscribeController extends Controller
{
    public function index()
    {
        return inertia('Subscribe');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => ['required', 'string', 'max:255'],
            'last_name'  => ['required', 'string', 'max:255'],
            'email'      => ['required', 'email', 'max:255']
        ]);

        // Hardcode product_id = 1
        $validated['product_id'] = 1;
        $subscription = Subscription::create($validated);

        return redirect('/');
    }
}
