// pages/post-detail/post-detail.js
import {postList} from '../../data/data.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collect:false,
    postData:{},
    _pid:null,
    _postCollect : {}
  },

  onCollect(event){
    const pid = this.data._pid;
    let postCollect = this.data._postCollect;

    if (!postCollect[pid]){
      postCollect[pid] = true;
    }else{
      postCollect[pid] = false;
    }
    wx.showToast({
      title: postCollect[pid]?'收藏成功':'取消收藏',
    })
    this.setData({
      collect: postCollect[pid]
    })
    this.data._postCollect = postCollect
    console.log('postCollect:',postCollect)
    wx.setStorageSync('postCollect', postCollect)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const postData =  postList[options.pid]
    this.data._pid = options.pid
    const postCollect = wx.getStorageSync('postCollect')
    //必须判断是否有值才赋值，否则不能this.data._postCollect[]使用
    if (postCollect){
      this.data._postCollect = postCollect
    }
    this.setData({
      postData,
      collect: postCollect[options.pid]
    })
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