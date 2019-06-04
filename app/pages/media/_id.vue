<template>
  <h1>
    {{mediaId}}
  </h1>
</template>
<script>
export default {
  data() {
    return {
      mediaId: this.$route.params.id
    }
  }
}

</script>
