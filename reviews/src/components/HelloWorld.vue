<template>
  <div class="hello">
    <!--  todo list -->
    <input type="text" v-model="todo" @keyup="add($event)">

    <h2>未完成</h2>
    <ul>
      <li v-for="(item, key) in list" v-if="!item.checked">
        <input type="checkbox" v-model="item.checked" @change="storageChange">{{item.title}} <button @click="del(key)">删除</button>
      </li>
    </ul>

    <h2>已完成</h2>
    <ul class="finish">
      <li v-for="(item, key) in list" v-if="item.checked">
        <input type="checkbox" v-model="item.checked"  @change="storageChange">{{item.title}} <button @click="del(key)">删除</button>
      </li>
    </ul>

  </div>
</template>

<script>
  import storage from '../module/storage.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      todo: '',
      list:[]
    }
  },
  methods:{
    add(e){
      if (e.keyCode == 13){
        this.list.push({
          title : this.todo,
          checked: false
        });
        this.todo = ''
        storage.set('list', this.list);
      }
    },
    del(index){
      this.list.splice(index, 1)
      storage.set('list', this.list);
    },
    storageChange(){
      storage.set('list', this.list);
    }
  },
  mounted() {
    let list = storage.get('list');
    if (list){
      this.list = list;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style: none;
    padding-left: 0px;
    width: 500px;
    position: relative;
  }
  ul li{
    margin: 5px 0;
  }

  ul button{
    float: right;
  }
  .finish {
    background: darkgray;
  }
</style>
