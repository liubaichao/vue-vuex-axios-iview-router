<template>
  <div class="kai pl10 pt10 pr10 pb10">
    <h1>{{ msg }}</h1>
    
    <Tabs style='height:200px'>
        <TabPane label="能量" icon="ios-analytics">
          多管闲事的命运，碎裂与剑士的意志
          <div class='mt10'>store中的show为true：{{show?"store中的我存在啊":"sorry!store中的我不存在"}}</div>
          <div>store中的show为false：{{noShow?"store我存在啊":"sorry!store我不存在"}}</div>
        </TabPane>
        <TabPane label="飞雪" icon="ios-flower">
          比任何对手都强，乃人生最大的烦恼
          <ul class='mt10'>
            <li style="white-space:nowrap">
              经验：{{num}}<br>升级：<span @click="add({n:10})" class='cursor click'>+10</span>
            </li>
            <li v-for="(item,i) in list" :key="i">{{item.className}}</li>
          </ul>
        </TabPane>
        <TabPane label="玫瑰" icon="ios-rose">一个人可以被毁灭，但绝不可以被打败</TabPane>
    </Tabs>

  </div>
  
</template>

<script>
import Vue from 'vue'
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import { TabPane, Tabs } from 'iview';

const arr = [ TabPane, Tabs ] 
arr.map((e)=>{  //动态生成全局组件
   Vue.component(e.name, e);
})
export default {
  name: 'About',
  data () {
    return {
      msg: '以绝望为剑,铸逝者为铠!'
    }
  },
  created(){
    this.getList()
  },
  computed:{
    ...mapState({
      show:"show",
      num:"num",
      list:"kList"
    }),
    ...mapGetters(["noShow"])
   
  },
  methods:{
    ...mapMutations({
      add:'add'
    }),
    ...mapActions({
      getList:'getList'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.kai{min-height:400px}
.click {
    border: 1px solid #aaa;
    padding: 2px 6px 2px;
    background: #eee;
}

</style>
