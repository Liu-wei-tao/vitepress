import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'xiaoliu',
  //左边界面
  themeConfig: {
    siteTitle: "小刘,欢迎回家！",
    logo: "https://cdn.staticaly.com/gh/Liu-wei-tao/myimg@master/文档网站所需要的图片/logo1.4f9rt58nd5s0.webp",
    
    
    nav: [
      { text: "vitepress脚本一键部署", link: "../md/初始化配置vitepress.md" },
      { text: "免费gpt账号", link: "../md/user.md" },
      { text: "技术篇文档", link: "../md/1.阶段回顾与综合架构准备.md" },
      {
        text: "Drop Menu",
        items: [
          {
            text: "Item A",
            items: [
              { text: "Item A1", link: "/item-A1" },
              { text: "Item A2", link: "/item-A2" },
            ],
          },
          {
            text: "Item B",
            items: [
              { text: "Item B1", link: "/item-B1" },
              { text: "Item B2", link: "/item-B2" },
            ],
          },
        ],
      },
    ],
    // 配置社交链接socialLinks
    socialLinks: [
      { icon: "github", link: "https://github.com/Liu-wei-tao" },
      { icon: "twitter", link: "..." },
      // 您还可以通过传递 SVG 字符串来添加自定义图标：
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="SVG namespace"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
      },
    ],

    //侧边栏
    sidebar: [
      {
        text: "阶段回顾",
        items: [
          {
            text: "阶段回顾与综合架构准备",
            link: "../md/1.阶段回顾与综合架构准备.md"
          },
          {
            text: "docker快速搭建一个静态网站",
            link: "../md/2.docker快速搭建一个静态网站.md",
          },
        ],
      },
      {
        text: "vitepress脚本一键部署",
        items: [
          {
            text: "初始化配置vitpress",
            link: "../md/初始化配置vitepress.md",
          },
          {
            text: "用dockerfile进行云部署",
            link: "../md/docker.md",
          },
          
        ],
      },

      {
        text: "免费ai项目",
        items: [
          {
            text: "免费账号",
            link: "../md/免费账号.md",
          },
          
          
        ],
      },
    ],
  },
});
