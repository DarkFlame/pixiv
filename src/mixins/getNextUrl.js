import FetchApi from '../api/fetch'
export default {
  methods: {
    getNextPage(url){
      if (!url) return Promise.resolve()
      return FetchApi.fetchByUrl(url).then(({data}) => {
        return Promise.resolve(data.data)
      })
    },
    showNoPageMessage(message = '已经显示全部图片'){
      return this.$message({
        message,
        duration: 4000
      })
    }
  }
}
