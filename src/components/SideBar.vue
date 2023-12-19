<template>
    <nav class="sidebar card py-2">
<ul class="nav flex-column">
    <li class="nav-item">
        <router-link class="nav-link px-0"  to="/">Головна</router-link>
	</li>

    <li class="nav-item">
        <router-link class="nav-link px-0"  to="/clients">Клієнти</router-link>
	</li>

    <li class="nav-item">
        <router-link class="nav-link px-0"  to="/products">Квіти</router-link>
	</li>

	<li class="nav-item">
        <router-link class="nav-link px-0"  to="/colors">Кольори</router-link>
	</li>

    <li class="nav-item">
        <router-link class="nav-link px-0"  to="/sizes">Розміри</router-link>
	</li>
    
	<li class="nav-item">
		<router-link class="nav-link px-0"  to="/types">Типи</router-link>
	</li>

</ul>
</nav>
</template>

<style>
.sidebar .nav-link {
    font-weight: 500;
    color: var(--bs-dark);
}
.sidebar .nav-link:hover {
    background: var(--bs-light);
    color: var(--bs-primary);
}
</style>