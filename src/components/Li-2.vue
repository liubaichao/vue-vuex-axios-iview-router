<template>
  <div class="li-2">
    <h4 class='ml10 mt10'>{{ msg }}</h4>
    <!-- <p v-for="(item,i) in list" class="tl ml20" :key="i">{{item.className}}</p> -->
    <Collapse simple class='mt5 ml10 mr10 mb10'>
        <Panel :name="'type'+i" v-for="(item, i) in listLi">
            {{item.className}}
            <p slot="content">艾瑞莉娅：肩负重担的感觉就是一千个人都翘首以盼你说的每一个字 ， 人类 ，瓦斯塔亚 我们都是艾欧尼亚人 ， 我喜欢的东西不多 ，只有这片蓝天还有这条蠢蜥蜴。削弱+{{item.classID}}</p>
        </Panel>
    </Collapse>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import { Sider ,Collapse ,Panel ,Icon ,Header ,Button ,Table } from 'iview';

const arr = [ Sider ,Collapse ,Panel ,Icon ,Header ,Button ,Table ] 
arr.map((e)=>{  //动态生成全局组件
   Vue.component(e.name, e);
})
export default {
  name: 'Li-2',
  data () {
    return {
      msg: '最后的轻语',
    }
  },
  created:function(){
    this.getListLi()
  },
  computed: {
    ...mapState(["listLi"])
  },
  methods: {
    ...mapActions(["getListLi"]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
