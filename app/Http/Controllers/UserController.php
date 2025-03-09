<?php

namespace App\Http\Controllers;

use App\Enum\RolesEnum;
use App\Http\Resources\AuthUserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Illuminate\Validation\Rules;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        // dd(AuthUserResource::collection(User::all())->collection->toArray())
        return Inertia::render('Users/Index', [
            'users' => AuthUserResource::collection(User::all())->collection->toArray()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Users/Create', [
            'roles' => Role::all(),
            'roleLabels' => RolesEnum::labels()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', Rules\Password::defaults()],
            'roles' => ['required', 'array']
        ]);
        // dd($data);
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        $user->syncRoles($data['roles']);
        return back()->with('success', 'User Added Successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
        return Inertia::render('Users/Show', [
            'user' => new AuthUserResource($user),
            'roleLabels' => RolesEnum::labels()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
        return Inertia::render('Users/Edit', [
            'user' => new AuthUserResource($user),
            'roles' => Role::all(),
            'roleLabels' => RolesEnum::labels()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
        $data = $request->validate([
            'roles' => ['required', 'array']
        ]);
        // dd($data);
        $user->syncRoles($data['roles']);
        return back()->with('success', 'Roles Updated Successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
        // dd($user);
        $user->delete();
        redirect()->back()->with('success', 'User Deleted Successfully');
    }
}
