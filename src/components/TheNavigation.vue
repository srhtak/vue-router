<template>
    <nav id="nav">
        <router-link  to="/">Home</router-link>
        <router-link  to="/brazil">Brazil</router-link>
        <router-link  to="/panama">Panama</router-link>
        <router-link  to="/hawaii">Hawaii</router-link>
        <router-link  to="/jamaica">Jamaica</router-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
#nav {
    display: flex;
    justify-content: center;
    padding: 0 15px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 1rem 0.5rem;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #b31919;
}
</style>