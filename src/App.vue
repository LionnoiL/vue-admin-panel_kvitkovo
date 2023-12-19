<template>

  <div class="container">

<section class="section-content py-3">
	<div class="row">
		<aside class="col-lg-3"> 
      <SideBarVue/>
    </aside>

    <router-view/>

	</div>
</section>

</div>

</template>

<script>
import SideBarVue from './components/SideBar.vue'

export default {
  name: 'AppName',
  components: {
    SideBarVue
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
