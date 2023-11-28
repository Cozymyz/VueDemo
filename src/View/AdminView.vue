<template>
    <div>
        this is adminView
    </div>
</template>
<script>
import { adminAccountModule } from "../store/modules/adminAccount";
export default {
  name: 'adminView',
  mounted(){
    this.$store.registerModule('admin', adminAccountModule)
  },
  beforeUnmount() {
    this.$store.unregisterModule('admin', adminAccountModule)
  },
}
</script>