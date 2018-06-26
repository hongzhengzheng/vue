// pages/na1-detail/video/video.js
// articles: [
//   {
//     contentId: 1177432,
//     cover: "http://edu-image.nosdn.127.net/120526FD0446F6F167ECEC586125D4A8.jpg",
//     title: "初级前端开工程师",
//     discription: "零基础入门前端开发工程师",
//     number: "799人学过"

//   },
//   {
//     contentId: 1176561,
//     cover: "http://edu-image.nosdn.127.net/e62e5903-7ed8-470f-8e34-1c8160860a43.jpg",
//     title: "零基础前端入门之路",
//     discription: "一门适合初学者的精品课程",
//     number: "578人学过"
//   },
//   {
//     contentId: 1161967,
//     cover: "http://img-ph-mirror.nosdn.127.net/kc9dG1V4Fcw8GvAVlSWHVQ==/6631677994653488481.png",
//     title: "FlexBox弹性盒子详解",
//     discription: "css3中的FlexBox详解 课程目录",
//     number: "3047人学过"
//   },
//   {
//     contentId: 1177828,
//     cover: "http://img-ph-mirror.nosdn.127.net/oHvzNqnAqlqFVWzwqYxw7A==/6632209058768550733.jpg",
//     title: "JS之Vue.JS(二)",
//     discription: "从理论基础讲到运用实战",
//     number: "397人看过"
//   }]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    subject: { id: 1001, image: "http://edu-image.nosdn.127.net/120526FD0446F6F167ECEC586125D4A8.jpg", title: "初级前端开工程师", original_title: "javascript基础入门", year: "2014年", name: "講師：正哥", rating: "24513人学过", video: "http://study.163.com/course/courseLearn.htm?courseId=224014#/learn/video" },
    movieList: [{ id: 1001, image: "http://edu-image.nosdn.127.net/e62e5903-7ed8-470f-8e34-1c8160860a43.jpg", title: "零基础前端入门之路", original_title: "javascript基础入门", year: "2014年", name: "講師：洪正", rating: "34513人学过", video: "http://study.163.com/course/courseLearn.htm?courseId=224014#/learn/video?lessonId=330283&courseId=224014" }, { id: 1002, image: "http://edu-image.nosdn.127.net/DBE627DD291CAF618D6C5CFD6CF1D760.png", title: "从零玩转Node.js", original_title: "Node.js入门", year: "2016年", name: "讲师：叶建华老师", rating: "24527人学过", video: "http://study.163.com/course/courseLearn.htm?courseId=1005269026#/learn/text?lessonId=1052286610&courseId=1005269026" }, { id: 1003, image: "http://edu-image.nosdn.127.net/41502dfb-7efd-45f5-a655-89c695c69f5a.jpg", title: "HTML5精讲", original_title: "HTML5实战", year: "2017年", name: "讲师：表严肃", rating: "12324人学过", video: "http://study.163.com/course/courseLearn.htm?courseId=1003631012#/learn/video?lessonId=1004150294&courseId=1003631012" }, { id: 1004, image: "http://edu-image.nosdn.127.net/B73FACE3E809EEB2B8E978C6AA2ABE4F.jpg", title: "区块链100问-入门必看的小动画！", original_title: "区块链入门", year: "2018年", name: "讲师：火币集团", rating: "2426人学过", video: "http://study.163.com/course/courseLearn.htm?courseId=1004954004#/learn/video?lessonId=1050810818&courseId=1004954004" }, { id: 1005, image: "http://edu-image.nosdn.127.net/112cf69c-9dad-4775-967c-32a601d48b75.png", title: "零基础前端入门之路", original_title: "疯狂的Python：零基础入门", year: "2017年", name: "讲师：邹琪鲜", rating: "13435人学过", video: "http://study.163.com/course/courseLearn.htm?courseId=302001#/learn/video?lessonId=1048111029&courseId=302001" }, { id: 1006, image: "http://edu-image.nosdn.127.net/CD900417D755F4CE22AA1A059C3AB278.jpg", title: "吴宗恩：10分钟学会使用单反摄影", original_title: "单反摄影基础", year: "2014年", name: "讲师：邹琪鲜", rating: "17329人学过", video: "http://study.163.com/course/courseLearn.htm?courseId=1002995024#/learn/video?lessonId=1003397743&courseId=1002995024" }, { id: 1007, image: "http://edu-image.nosdn.127.net/E62500D1F182AA02D54AF1F31F595F43.jpg", title: "超细讲解Django打造大型企业官网", original_title: "Django实战", year: "2017年", name: "讲师：知了黄勇", rating: "4832人学过", video: "http://study.163.com/course/courseLearn.htm?courseId=1005084022#/learn/video?lessonId=1051574355&courseId=1005084022" }, { id: 1008, image: "http://edu-image.nosdn.127.net/6f358256-0d58-4287-ac0b-59107a31a6f4.jpg", title: "新概念英语2（第44-92课）", original_title: "新概念英语进阶", year: "2014年", name: "讲师：技术指导EvansFaFa老师", rating: "29842人学过" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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