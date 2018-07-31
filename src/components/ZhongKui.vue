<template>
  <div class="zhongKui flex ">
    <Card style="width:290px" v-for="(item,i) in zList" :key="i" class='mt10 mr10 ml15 mb10'>
        <div class="flex alic pb10 tl" >
          <img :src="item.images.medium" style="height:100px;width:80px;" class="mr20"/>
          <div>
            <p>电影名称：{{item.title}}</p>
            <p>类型：<span v-for="(n,j) in item.genres" class="mr5" :key="j">{{n}}</span></p>
            <p>豆瓣评分：{{item.rating.average}}</p>
            <p>拍摄于：{{item.year}}</p>
          </div>
      </div>
    </Card>
    <Spin size="large" fix v-if="loading"></Spin>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import { Card, Sider ,Collapse ,Panel ,Icon ,Header ,Button ,Spin } from 'iview';

const arr = [Card, Sider ,Collapse ,Panel ,Icon ,Header ,Button ,Spin ] 
arr.map((e)=>{  //动态生成全局组件
   Vue.component(e.name, e);
})
export default {
  name: 'ZhongKui',
  data () {
    return {

    }
  },
  created:function(){
    // this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{emulateJSON: true})
		// 			.then(response => {
		// 				console.log(response.body);
		// 			 	this.list = response.data.subjects;
		// 			}, response => {
		// 				console.log("error");
    // 			});
    this.getListZhong()
  },
  computed: {
    ...mapState(["zList","loading"])
  },
  methods: {
    ...mapActions(["getListZhong"])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.zhongKui{
   flex-wrap:wrap
}

</style>
