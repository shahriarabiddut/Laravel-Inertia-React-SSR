<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Feature;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    //
    public function store( Request $request, Feature $feature)
    {
        $request->validate([
            'comment'=>'required|string'
        ]);
        $comment = new Comment();
        $comment->comment = $request->comment;
        $comment->user_id = auth()->id();
        $feature->comments()->save($comment);
        redirect()->back()->with('success', 'Comment added successfully');
    }
    public function destroy(Comment $comment)
    {
        if($comment->user_id !== auth()->id()){
            abort(403);
        }
        $comment->delete();
        redirect()->back()->with('success', 'Comment deleted successfully');
    }
}
