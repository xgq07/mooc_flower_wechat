// pages/movies/movies.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters:[],
    comingSoon:[],
    top250:[],
    searchResult:false,
    searchData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      data:{
        start:0,
        count:3
      },
      url: app.gBaseUrl + 'in_theaters',
      success:(res)=>{
        this.setData({
          inTheaters:res.data.subjects
        })
        console.log('in_theaters res:', res)
      }
    })

    wx.request({
      data:{
        start:0,
        count:3
      },
      url: app.gBaseUrl + 'coming_soon',
      success:(res)=>{
        this.setData({
          comingSoon:res.data.subjects
        })
        console.log('coming_soon res:', res)
      }
    })

    wx.request({
      data:{
        start:0,
        count:3
      },
      url: app.gBaseUrl + 'top250',
      success:(res)=>{
        this.setData({
          top250:res.data.subjects
        })
        console.log('top250 res:', res)
      }
    })
  },

  onGotoMore(event){
    console.log(event)
    wx.navigateTo({
      url: '/pages/more-movie/more-movie?type='+event.currentTarget.dataset.type,
    })
  },

  onConfirm(event){
    console.log(event)
    this.setData({
      searchResult:true
    })
    wx.request({
      url: app.gBaseUrl + 'search',
      data:{
        q:event.detail.value
      },
      success:(res)=>{
        this.setData({
          searchData:res.data.subjects
        })
      }
    })
  },

  onSearchCancel(event){
    this.setData({
      searchResult:false
    })
    console.log("onSearchCancel")
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})