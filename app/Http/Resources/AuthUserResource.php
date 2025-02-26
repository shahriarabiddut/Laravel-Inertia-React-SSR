<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthUserResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=> $this->id,
            'name'=> $this->name,
            'email_verified_at' => $this->when($this->email_verified_at, fn() => $this->email_verified_at->format('Y-m-d H:i:s')),
            'permissions'=> $this->getAllPermissions()->map(
                function($permission){
                    return $permission->name;
                }
            ),
            'roles'=> $this->getRoleNames()
        ];
    }
}
