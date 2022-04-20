<script>
    import "$lib/global.css";

    let user;
</script>



<div class="navbar bg-base-100">
    <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" href="/">Webshop</a>
    </div>
    <div class="flex-none">
        <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle">
                <div class="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span class="badge badge-sm indicator-item">REACTIVE</span>
                </div>
            </label>
            <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div class="card-body">
                    <span class="font-bold text-lg">INSERT CART ITEMS HERE</span>
                    <span class="text-info">INSERT CART TOTAL HERE</span>
                    <div class="card-actions">
                        <a class="btn btn-primary btn-block" href="/cart">View cart</a>
                    </div>
                </div>
            </div>
        </div>
        {#if user}
            <div class="dropdown dropdown-end pl-3">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <i class="fa-solid fa-user-large"></i>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a class="justify-between">
                            Profile
                        </a>
                    </li>
                    <!-- IF USER ROLE ADMIN: ADMIN PANEL LINK HERE
                        IF USER ROLE MOD: MOD PANEL HERE -->
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
            {:else }
            <div class="btn-group">
                <a class="btn btn-outline bg-base-100 btn-sm " href="/user/login">Register</a>
                <a class="btn btn-outline bg-base-100 btn-sm " href="/user/register">Login</a>
            </div>
            {/if}
    </div>
</div>

<slot/>