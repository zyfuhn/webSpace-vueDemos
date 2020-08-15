<template>
  <div class="hello">
    <input type="text" v-model="todo" @keyup="add($event)">

    <h1>未完成</h1>
    <ul>
      <li v-for="(item,key) in list" v-if="!item.complete">
        <input type="checkbox" v-model="item.complete" @change="saveChange">{{item.title}} <button @click="del(key)">删除</button>
      </li>
    </ul>


    <h1>已完成</h1>
    <ul>
      <li v-for="(item,key) in list" v-if="item.complete">
        <input type="checkbox" v-model="item.complete" @change="saveChange">{{item.title}} <button @click="del(key)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import storage from '../module/storage'
  // console.log(storage)
export default {
  name: 'HelloWorld',
  data () {
    return {
      todo : '',
      list : []
    }
  },
  methods : {
    add(e){
      if (e.keyCode == 13){
        this.list.push({
          title : this.todo,
          complete: false
        });
        this.todo = '';
        storage.set('list', this.list)
      }
    },
    del(index){
      this.list.splice(index, 1)
      storage.set('list', this.list)
    },
    saveChange(){
      storage.set('list', this.list)
    }
  },
  mounted() {
    let list =storage.get('list');
    if (list){
      this.list = list;
    }
  }
}

</script>

<style scoped>
  ul {
    padding-left: 0px;
  }
  ul li {
    width: 500px;
    position: relative;
    margin: 10px 0px;
  }
  ul button {
    float: right;
  }
  .finish{
    list-style: none;

  }
  .finish li{
    background: gainsboro;
  }

</style>
