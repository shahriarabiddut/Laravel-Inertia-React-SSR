<?php

namespace App\Http\Controllers;

use App\Models\Feature;
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
        return back();
    }
    public function destroy(Feature $feature){
        Upvote::where('feature_id',$feature->id)->where('user_id',auth()->id())->delete();
        return back();
    }
}
