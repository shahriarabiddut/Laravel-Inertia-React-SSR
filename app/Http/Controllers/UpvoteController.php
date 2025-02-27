<?php

namespace App\Http\Controllers;

use App\Models\Upvote;
use Illuminate\Http\Request;

class UpvoteController extends Controller
{
    //
    public function store(Request $request){
        $data = $request->validate([
            'feature_id' => ['required','exists:features,id'],
            'upvote' => ['required','boolean'],
        ]);
        Upvote::updateOrCreate(
            ['feature_id' => $data['feature_id'],'user_id' => auth()->id()],
            ['upvote' => $data['upvote']]
        );
        return to_route('feature.index');
    }
}
