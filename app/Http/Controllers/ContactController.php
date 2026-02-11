<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;
use App\Models\Contact;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redis;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // https://www.youtube.com/watch?v=fJ1beMSkIFs
        // https://www.youtube.com/watch?v=qBxo6hW83jU&list=PL38wFHH4qYZVOnXxcS0NMGGmUsZky6JNG
        // https://ph.jobstreet.com/job/89196057?tracking=TMC-AppViewed-asia-6-jobapplied
        // profiling and debugging: https://www.youtube.com/watch?v=7PVRVGqzplc

        $contacts = Contact::latest()->paginate(5);

        /*
        Cache::store('redis')->put('test_key', 'hello redis', 600);
        $testCache = Cache::store('redis')->get('test_key');

        Redis::set('test_r_key', 'hello redis');
        $testCache2 = Redis::get('test_r_key');
        */

        return inertia('Contact/Contact', [
            'contacts'=>$contacts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContactRequest $request, Contact $contact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        //
    }
}
