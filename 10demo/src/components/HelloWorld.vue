<template>
  <div class="hello">

    <v-home></v-home>

  </div>
</template>

<script>
  import Home from './Home'
  /*
  * 1. 引入组件
  * 2. 注册组件
  * 3. 在模板中使用组件
  * */

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    'v-home': Home
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
