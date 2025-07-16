<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/shop">Shop</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px;
  box-sizing: border-box;
}

nav {
  padding: 24px 0;
  text-align: center;
  background: #f8f8f8;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  margin-bottom: 32px;
}

nav a {
  font-weight: 600;
  color: #2c3e50;
  font-size: 1.15rem;
  margin: 0 18px;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
  background: #e6f9f0;
}

@media (max-width: 600px) {
  #app {
    padding: 8px 2px;
    max-width: 100%;
  }
  nav {
    padding: 12px 0;
    margin-bottom: 18px;
    border-radius: 8px;
  }
  nav a {
    font-size: 1rem;
    margin: 0 8px;
    padding: 6px 8px;
  }
}
</style>
