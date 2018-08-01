<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu ref="side_menu" :active-name="activeName" theme="dark" width="auto" :class="menuitemClasses" @on-select='letsGo' @on-open-change='setOpen' accordion>
                    <div class='logo flex alic'>
                        <img src='http://img5.imgtn.bdimg.com/it/u=2515280705,2049630166&fm=11&gp=0.jpg' width='30' height='30'/>
                        <span class='fz18 ml10 flex1'>保护小鲁班</span>
                    </div>
                    <Submenu name="公孙离">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            <span>公孙离</span>
                        </template>
                        <!--这个to属性不生效，升级3.0也不行，好烦哦-->
                        <MenuItem name="Li-1" to="/li-1" @click.native='go("别浪" ,"Li-1")'>
                            <Icon type="ios-flower"></Icon>
                            <span>别浪</span>
                        </MenuItem>
                        <MenuItem name="Li-2" to="/li-2" @click.native='go("猥琐发育" ,"Li-2")'>
                            <Icon type="ios-analytics"></Icon>
                            <span>猥琐发育</span>
                        </MenuItem>
                    </Submenu>
                    <!-- <router-link to="/hello">你好靓仔</router-link> -->
                    <MenuItem name="ZhongKui" to="/" @click.native='go("钟馗" ,"ZhongKui" ,true)'>
                        <Icon type="search"></Icon>
                        <span>钟馗</span>
                    </MenuItem>
                    <MenuItem name="Kai" to="/kai" @click.native='go("凯" ,"Kai" ,true)'>
                        <Icon type="settings"></Icon>
                        <span>凯</span>
                    </MenuItem>
                    <Submenu name="百里守约">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            <span>百里守约</span>
                        </template>
                        <MenuItem name="Li-1" to="Li-1" @click.native='go("阿凯啊" ,"Li-1")'>
                            <Icon type="search"></Icon>
                            <span>阿凯啊</span>
                        </MenuItem>
                        <MenuItem name="Li-2" @click.native='go("你的厨艺" ,"Li-2")'>
                            <Icon type="ios-rose"></Icon>
                            <span>你的厨艺</span>
                        </MenuItem>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar flex alic justs">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" class='ml20' type="navicon-round" size="24"></Icon>
                    <div class='flex1 flex justs ml20'>
                        <Breadcrumb :style="{margin: '24px 0'}">
                            <BreadcrumbItem v-for="item in breadcrumbItem" >{{item}}</BreadcrumbItem>
                        </Breadcrumb>
                        <ul class='flex alic inline'>
                        <li class='mr20'>new</li>
                        <li class='mr20'>官方</li>
                        <li class='mr20'>社区</li>
                        <li class='mr20'>退出</li>
                        </ul>
                    </div>
                    
                    
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                      <!-- 路由匹配到的组件将渲染在这里 -->
                      <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import { Layout, Sider ,Menu ,MenuItem ,Icon ,Header ,Content ,Submenu ,Breadcrumb ,BreadcrumbItem} from 'iview';

const arr = [Layout, Sider ,Menu ,MenuItem ,Icon ,Header ,Content ,Submenu ,Breadcrumb ,BreadcrumbItem] 
arr.map((e)=>{  //动态生成全局组件
   Vue.component(e.name, e);
})

export default {
  name: 'App',
  data () {
      return {
          isCollapsed: false,
          open:[],
          openItem:[],
          activeName:localStorage.getItem('activeName') ? localStorage.getItem('activeName') : 'ZhongKui'
      }
  },
  created() {
      let open = localStorage.getItem('open') ? JSON.parse(localStorage.getItem('open')) : [];
      let openItem = localStorage.getItem('openItem') ? JSON.parse(localStorage.getItem('openItem')) : [];
      this.open = open;
      this.openItem = openItem;
  },
  computed: {
      rotateIcon () {
          return [
              'menu-icon',
              this.isCollapsed ? 'rotate-icon' : ''
          ];
      },
      menuitemClasses () {
          return [
              'menu-item',
              this.isCollapsed ? 'collapsed-menu' : ''
          ]
      },
      breadcrumbItem(){
          return this.open.concat(this.openItem)
      }
      
  },
  methods: {
      collapsedSider () {
          this.$refs.side1.toggleCollapse();
      },
      setOpen(e){
        console.log("展开的Submenu name",e)
        this.openItem = []
        this.open = []
        let arr = []
        if(e[0]){
            arr.push(e[0])
        }
        this.open = arr 
        localStorage.setItem('open',JSON.stringify(arr))
      },
      go(e ,name ,flag){
        console.log("选中的MentItem name",e)
        this.openItem = []
        if(flag){
            this.open = []
            localStorage.setItem('open',[])
        }
        let arr = []
        arr.push(e)
         console.log(arr)
        this.openItem = arr
        localStorage.setItem('openItem',JSON.stringify(arr))
        localStorage.setItem('activeName',name); //解决刷新后，选中状态，恢复默认
        console.log("openItem",JSON.parse(localStorage.getItem('openItem')))
      },
      letsGo(e){
        
        this.$router.push({
                name:e   
            })
        
      }
  }
}

</script>

<style scoped>
.logo{
    padding: 14px 24px;
    position: relative;
    z-index: 1;
    transition: all .2s ease-in-out;
    color: #fff;
    font-size: 14px;
}
/*强行变成ant design pro 风格*/
.ivu-layout-sider{background:#002140;} 
.ivu-menu-dark{background:#002140;}
.ivu-menu-dark,.ivu-menu-vertical,.ivu-menu-opened{background:#002140!important;}
.layout >>> .ivu-menu-submenu-title-icon{left:-4px} /* 设置scoped后，无法修改子组件样式 >>>用来修改子组件样式*/
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){background:#2d8cf0 !important;color:#fff!important;}
.ivu-layout-content{ min-height:max-content;}
    .layout{
        /* border: 1px solid #d7dde4; */
        background: #f5f7f9;
        position: relative;
        /* border-radius: 4px; */
        overflow: hidden;
    }
    .ivu-layout,.ivu-layout-has-sider{ height:100vh;}
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
