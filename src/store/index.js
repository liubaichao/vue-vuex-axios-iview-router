import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='; //代理

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    show: true,
    num: 100,

    loading:true,
    kList: [],
    listLi: [],
    zList:[]
  },
  getters: {
    noShow (state) {
      return !state.show
    }
  },
  mutations: {
    add (state, playload) {
      state.num += playload.n
    },
    getList (state, playload) {
      state[playload.type] = playload.res,
      state.loading = false
    }
  },
  actions: {
    getList ({commit}) {
      axios.jsonp('http://datainfo.duapp.com/shopdata/getclass.php', {emulateJSON: true})
        .then(response => {
          console.log(response.data)
          commit('getList', {
            res: response.data,
            type :'kList'
          })
        }, response => {
          console.log('error')
        })
    },
    getListLi ({commit}) {
      axios.get('http://datainfo.duapp.com/shopdata/getclass.php', {emulateJSON: true})
        .then(response => {
          console.log(response.data)
          commit('getList', {
            res: response.data,
            type :'listLi'
          })
        }, response => {
          console.log('error')
        })
    },
    getListZhong ({commit}) {
      // axios.get('https://api.douban.com/v2/movie/top250?count=10')  //不能跨域，正式项目可以用
      //   .then(response => {
      //     console.log(response.data)
      //     commit('getList', {
      //       res: response.data,
      //       type :'zList'
      //     })
      //   }, response => {
      //     console.log('error')
      //   })
      axios.get(API_PROXY + 'https://api.douban.com/v2/movie/top250?count=24')
      .then(response => {
        console.log(response.data)
        commit('getList', {
          res: response.data.subjects,
          type :'zList'
        })
      }, response => {
        console.log('error')
      });
    },
  }
})
