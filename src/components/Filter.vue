<template>
  <va-tabs v-model="filterValue" class="filter">
    <template #tabs>
       <va-tab
          v-for="tab in ['All', 'Men', 'Women', 'Jewelery', 'Electronics']"
          :key="tab"
        >
          {{ tab }}
        </va-tab>
    </template>
  </va-tabs>
</template>

<script>
export default {
    computed: {
      filterValue: {
        get() {
          return this.$store.state.filterValue
        },
        set(newValue) {
          this.$store.dispatch('setFilterValue', newValue);
        }
      }
    }
}
</script>

<style scoped>
.filter{
    margin: 30px auto;
}
</style>