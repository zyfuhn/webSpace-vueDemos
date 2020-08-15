<template>
  <div id="app">
    {{msg}}

    <button v-on:click="getMsg()">获取消息</button>
    <hr>
    <button v-on:click="setMsg">改变数据</button>
    <hr>
    <button v-on:click="getList">获取数据</button>
    <ul>
      <li v-for="(item,key) in list">
        {{key}}---{{item}}
      </li>
    </ul>
    <hr>

    <button datafld="eve" data-id="eaa" data-name="事件" v-on:click="eventFun($event)">事件按钮</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      msg : "我是消息信息",
      list : []
    }
  },
  methods: {
    getMsg: function () {
      alert(this.msg)
    },
    setMsg(){
      this.msg = "改变后的数据"
    },
    getList(){
      for (var i=0; i<10;i ++){
        this.list.push("这是第" + i + "条数据")
      }
    },
    eventFun(e){
      console.log(e)
      e.target.style.background = 'red'
      console.log(e.target.dataset.id)
      console.log(e.target.dataset.name)
      console.log(e.target.getAttribute("datafld"))
    }
  }
}
</script>

<style>

</style>
