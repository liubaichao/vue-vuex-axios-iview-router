<template>
  <div class="li-1">
    <h4 class='mb5 pt10 ml10'>{{ msg }}</h4>
    <Table border :loading="loading" :columns="columns7" :data="listLi" class='ml10 mr10 mb10'></Table>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import { Modal, Sider ,Menu ,MenuItem ,Icon ,Header ,Button ,Table } from 'iview';
Vue.prototype.$Modal = Modal; 

const arr = [Modal, Sider ,Menu ,MenuItem ,Icon ,Header ,Button ,Table ] 
arr.map((e)=>{  //动态生成全局组件
   Vue.component(e.name, e);
})

export default {
  name: 'Li-1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App', 
      columns7: [
                    {
                        title: 'className',
                        key: 'className',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'ios-flower'
                                    }
                                }),
                                h('strong', params.row.className)
                            ]);
                        }
                    },
                    {
                        title: 'classID',
                        key: 'classID'
                    },
                    {
                        title: 'icon',
                        key: 'icon'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ]
    }
  },
  created:function(){
    this.getListLi()
  },
  computed: {
    ...mapState(["listLi","loading"])
  },
  methods: {
    ...mapActions(["getListLi"]),
    show (index) {
        this.$Modal.info({
            title: 'User Info',
            content: `className：${this.listLi[index].className}<br>classID：${this.listLi[index].classID}<br>icon：${this.listLi[index].icon}`
        })
    },
    remove (index) {
        this.listLi.splice(index, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
