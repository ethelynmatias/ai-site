<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;
use App\Models\Contact;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redis;
use Illuminate\Http\Request;

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
        return inertia('Contact/Show',['contact' => $contact]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        return inertia('Contact/Edit',['contact' => $contact]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contact $contact)
    {
        $validated = $request->validate([
            'name'  => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'body'  => 'nullable|string',
        ]);

        $contact->update($validated);

        /*
        return redirect()
            ->back()
            ->with('message', 'Contact updated successfully.');*/

        return redirect('/contacts')->with('message', 'Contact updated sucessfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();

        return redirect('/contacts')->with('message', 'Contact deleted sucessfully.');
    }
}
