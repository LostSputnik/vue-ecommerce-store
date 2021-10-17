<template>
  <footer>
    <va-navbar>
      <template #left>
        <!-- <va-navbar-item></va-navbar-item> -->
      </template>
      <template #center>
        <!-- <va-navbar-item></va-navbar-item> -->
      </template>
      <template #right>
        <va-navbar-item>by kafka</va-navbar-item>
      </template>
    </va-navbar>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
footer{
  /* margin-bottom: 1px; */
  margin-top: 10px;
}

</style>