module.exports = {
  title: '计算机导论大作业',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      {
        text: '学习',
        items: [
          { text: '关系图', link: '/detail/relation/' },
          { text: '参考资料', link: '/detail/info/' },
          { text: '认知与规划', link: '/detail/me/' },

        ]
      },
      { text: 'Github', link: 'https://github.com/shdancer' }
    ],
    sidebar: [
      '/',
      '/detail/relation/',
      '/detail/info/',
      '/detail/me/'
    ]
  }
}