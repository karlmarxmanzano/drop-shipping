<?php

use App\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()['cache']->forget('spatie.permission.cache');

        Permission::create(['name' => 'permission_view']);
        Permission::create(['name' => 'permission_create']);
        Permission::create(['name' => 'permission_delete']);
        Permission::create(['name' => 'permission_edit']);
        Permission::create(['name' => 'role_view']);
        Permission::create(['name' => 'role_create']);
        Permission::create(['name' => 'role_delete']);
        Permission::create(['name' => 'role_edit']);
        Permission::create(['name' => 'user_create']);
        Permission::create(['name' => 'user_delete']);
        Permission::create(['name' => 'user_edit']);
        Permission::create(['name' => 'user_view']);

        $role = Role::create(['name' => 'administrator']);

        $role->givePermissionTo([
            'permission_view',
            'permission_create',
            'permission_delete',
            'permission_edit',
            'role_view',
            'role_create',
            'role_delete',
            'role_edit',
            'user_create',
            'user_delete',
            'user_edit',
            'user_view',
        ]);

        // Create Super admin
        $user = User::create([
            'first_name' => 'Admin',
            'last_name' => 'admin',
            'email' => 'admin@admin.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi' // password
        ]);

        $user->assignRole('administrator');
    }
}
