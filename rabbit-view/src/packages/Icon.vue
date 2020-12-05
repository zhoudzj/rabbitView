<template>
  <svg class="rat-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`" />
  </svg> 
</template>

<script>
import icon from "../styles/icon.js"
export default {
  name:'rab-icon',
  props:{
    icon:{
      type:String,
      require:true
    }
  }
}
</script>

<style scoped lang="scss">
  .rat-icon{
    width:25px;
    height: 25px;
  }
</style>