<?php

namespace App\Enum;

enum PermissionsEnum : string
{
    //
    case ManageFeatures = 'manage_features';
    case ManageUsers = 'manage_users';
    case ManageComments = 'manage_comments';
    case ManageUpvoteDownvote = 'manage_upvote_downvote';
    

}
