<?php

namespace Database\Seeders;

use App\Enum\PermissionsEnum;
use App\Enum\RolesEnum;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Defining Roles
        $userRole = Role::create(['name' => RolesEnum::User->value]);
        $commenterRole = Role::create(['name' => RolesEnum::Commenter->value]);
        $adminRole = Role::create(['name' => RolesEnum::Admin->value]);

        // Permissions
        $manageFeaturesPermisson = Permission::create([
            'name'=> PermissionsEnum::ManageFeatures->value,
        ]);
        $manageCommentsPermisson = Permission::create([
            'name'=> PermissionsEnum::ManageComments->value,
        ]);
        $manageUsersPermisson = Permission::create([
            'name'=> PermissionsEnum::ManageUsers->value,
        ]);
        $upvoteDownvotePermisson = Permission::create([
            'name'=> PermissionsEnum::ManageUpvoteDownvote->value,
        ]);

        $userRole->syncPermissions([$upvoteDownvotePermisson]);
        $commenterRole->syncPermissions([$upvoteDownvotePermisson,$manageCommentsPermisson]);
        $adminRole->syncPermissions([$manageUsersPermisson,$manageFeaturesPermisson,$upvoteDownvotePermisson,$manageCommentsPermisson]);

        User::factory()->create([
            'name' => 'User User',
            'email' => 'user@gmail.com',
        ])->assignRole(RolesEnum::User);

        User::factory()->create([
            'name' => 'Commenter User',
            'email' => 'commenter@gmail.com',
        ])->assignRole(RolesEnum::Commenter);

        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@gmail.com',
        ])->assignRole(RolesEnum::Admin);
    }
}
