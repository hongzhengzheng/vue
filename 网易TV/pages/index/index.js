
Page({
  data: {
    banners:[{"id":"1001","picUrl":"http://edu-image.nosdn.127.net/323E9C7F909B2EC8A4B6E19166FD10FA.jpg?imageView&thumbnail=225y125&quality=100&type=webp"},{"id":"1002","picUrl":"http://img-ph-mirror.nosdn.127.net/sai-88Td4yl0COkDRul30Q==/2435602973495665665.jpg?imageView&thumbnail=225y125&quality=100&type=webp"},{"id":"1003","picUrl":"http://img-ph-mirror.nosdn.127.net/kuUufCOmejJcizYiNLCOmg==/4915678993375769079.jpg?imageView&thumbnail=225y125&quality=100&type=webp"},{"id":"1004","picUrl":"http://img-ph-mirror.nosdn.127.net/aIJdHaJBboZt56eAtrR5Ow==/6631794542885228595.jpg?imageView&thumbnail=223y124&quality=100"}],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    articleList:[
      {
        articles: [
          {
            contentId: 1177432,
            cover: "http://edu-image.nosdn.127.net/120526FD0446F6F167ECEC586125D4A8.jpg",
            title: "初级前端开工程师",
            discription: "零基础入门前端开发工程师",
            number: "799人学过"

          },
          {
            contentId: 1176561,
            cover: "http://edu-image.nosdn.127.net/e62e5903-7ed8-470f-8e34-1c8160860a43.jpg",
            title: "零基础前端入门之路",
            discription:"一门适合初学者的精品课程",
            number:"578人学过"
          },
          {
            contentId: 1161967,
            cover: "http://img-ph-mirror.nosdn.127.net/kc9dG1V4Fcw8GvAVlSWHVQ==/6631677994653488481.png",
            title: "FlexBox弹性盒子详解",
            discription:"css3中的FlexBox详解 课程目录",
            number:"3047人学过"
          },
          {
            contentId: 1177828,
            cover: "http://img-ph-mirror.nosdn.127.net/oHvzNqnAqlqFVWzwqYxw7A==/6632209058768550733.jpg",
            title: "JS之Vue.JS(二)",
            discription: "从理论基础讲到运用实战",
            number:"397人看过"
          }
        ],
        date: "精品课程"
      },
      {
        articles: [
          {
            contentId: 1177432,
            cover: "http://edu-image.nosdn.127.net/fae7853e-aeda-49e2-8899-e6b63ae42dea.jpg",
            title: "工作型PPT应该这样做【爆款必学】",
            discription: "幻方秋叶PPT",
            number: "1799人学过"

          },
          {
            contentId: 1176561,
            cover: "http://edu-image.nosdn.127.net/b335e445-f6d5-4739-9735-02e8c180a3ec.jpg",
            title: "我懂个P【设计大神阿文带你飞】",
            discription:"幻方秋叶PPT",
            number:"2578人学过"
          },
          {
            contentId: 1161967,
            cover: "http://img-ph-mirror.nosdn.127.net/kc9dG1V4Fcw8GvAVlSWHVQ==/6631677994653488481.png",
            title: "FlexBox弹性盒子详解",
            discription:"css3中的FlexBox详解 课程目录",
            number:"3047人学过"
          },
          {
            contentId: 1177828,
            cover: "http://edu-image.nosdn.127.net/6E8115AD127C6FB39E804B6F7BA37BB8.jpg",
            title: "JS之Vue.JS(二)",
            discription: "从理论基础讲到运用实战",
            number:"397人看过"
          }
        ],
        date: "个性推荐"
      },
      {
        articles: [
          {
            contentId: 1177432,
            cover: "http://edu-image.nosdn.127.net/52f0f04e-b888-4622-9c4e-6cdb72e0e769.jpg",
            title: "初级前端开工程师",
            discription: "零基础入门前端开发工程师",
            number: "799人学过"

          },
          {
            contentId: 1176561,
            cover: "http://edu-image.nosdn.127.net/4926501e-308a-427d-a5cb-d4e3cd1ebeed.jpg",
            title: "零基础前端入门之路",
            discription:"一门适合初学者的精品课程",
            number:"578人学过"
          },
          {
            contentId: 1161967,
            cover: "http://img2.ph.126.net/lZZfvyGt7hZf6NlErzLiyg==/6632207959256755031.jpg",
            title: "FlexBox弹性盒子详解",
            discription:"css3中的FlexBox详解 课程目录",
            number:"3047人学过"
          },
          {
            contentId: 1177828,
            cover: "http://img1.ph.126.net/DtAOZD350YBDunWFaMHpOQ==/6631982559373658191.jpeg",
            title: "JS之Vue.JS(二)",
            discription: "从理论基础讲到运用实战",
            number:"397人看过"
          }
        ],
        date: "微专业"
      }
    ]
  },
  swiperchange: function(e) {
    //console.log(e.detail.current)
     this.setData({  
      swiperCurrent: e.detail.current  
  })  
},
tapBanner: function(e) {
  if (e.currentTarget.dataset.id != 0) {
    wx.navigateTo({
      url: "swiper-detail/detail"
    })
  }
},
viewSearch() { // 打开搜索页面
  wx.navigateTo({
    url: '../search/search'
  })
},
  showDetail(){
    wx.navigateTo({
      url:'jingpin/detail'
    })
  }
})
