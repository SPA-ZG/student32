<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink class="links" to="/">Exercises</RouterLink>
      <a class="name">Fitness app</a>
      <RouterLink class="links" to="/diet">Diet</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
  .name {
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 80px;
    color: blue;
  }

  .links {
    color:deepskyblue;
    font-size: 40px;
    margin-left: 100px;
    margin-right: 100px;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  header {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    text-align: center;
    background-color: lightgrey;
    border-color: black;
    border: 3px;
    border-style: solid;
  }
</style>