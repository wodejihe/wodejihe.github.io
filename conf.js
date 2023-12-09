jsproxy_config({
  // 当前配置的版本（记录在日志中，用于排查问题）
  // 每次修改配置，该值需要增加，否则不会生效。
  // 默认每隔 5 分钟自动下载配置，若想立即验证，可通过隐私模式访问。
  ver: '110',

  // 通过 CDN 加速常用网站的静态资源（实验中）
  static_boost: {
    enable: true,
    ver: 62
  },

  // 节点配置
  node_map: {
    'demo-hk': {
      label: '演示服务-香港节点',
      lines: {
        // 主机:权重
        'node-aliyun-hk-1.etherdream.com:8443': 1,
        'node-aliyun-hk-2.etherdream.com:8443': 2,
      }
    },
    'demo-sg': {
      label: '演示服务-新加坡节点',
      lines: {
        'node-aliyun-sg.etherdream.com:8443': 1,
      },
    },
    'mysite': {
      label: '当前站点',
      lines: {
        [location.host]: 1,
      }
    },
    // 该节点用于加载大体积的静态资源
    'cfworker': {
      label: '',
      hidden: true,
      lines: {
        // 收费版（高权重）
        //'node-cfworker-2.etherdream.com': 4,

        // 免费版（低权重，分摊一些成本）
        // 每个账号每天 10 万次免费请求，但有频率限制
        'b.007.workers.dev': 1,
        'b.hehe.workers.dev': 1,
        'b.lulu.workers.dev': 1,
        'b.jsproxy.workers.dev': 1,
      }
    }
  },

  /**
   * 默认节点
   */
  node_default: 'mysite',
  // node_default: /jsproxy-demo\.\w+$/.test(location.host) ? 'demo-hk' : 'mysite',

  /**
   * 加速节点
   */
  node_acc: 'cfworker',

  /**
   * 静态资源 CDN 地址
   * 用于加速 `assets` 目录中的资源访问
   */
  // assets_cdn: 'https://cdn.jsdelivr.net/gh/zjcqoo/zjcqoo.github.io@master/assets/',

  // 本地测试时打开，否则访问的是线上的
  assets_cdn: 'assets/',

  // 首页路径
  index_path: 'index_v3.html',

  // 支持 CORS 的站点列表（实验中...）
  direct_host_list: 'cors_v1.txt',

  /**
   * 自定义注入页面的 HTML
   */
  inject_html: '<p style="text-align: center;">
    <span style="font-size: 20px;"><strong><span style="color: #C0504D;">testing</span></strong></span>
</p>',

  /**
   * URL 自定义处理（设计中）
   */
  url_handler: {
        'https://t66y.com/': {
      replace: 'https://baidu.com'
    },
    'https://www.pornhub.com/': {
      redir: 'https://php.net/'
    },
    'https://www.tumblr.com/': {
      content: 'Hello World'
    },
    
    'https://google.com/': {
      content: 'Hello World'
    },
    'https://www.google.com/': {
      content: 'Hello World'
    },
    'https://youtube.com/': {
      content: 'Hello World'
    },
    'https://www.youtube.com/': {
      content: 'Hello World'
    },
    'https://www.twitter.com/': {
      content: 'Hello World'
    },
    'https://facebook.com/': {
      content: 'Hello World'
    },
    'https://www.facebook.com/': {
      content: 'Hello World'
    },
    'https://twitter.com/': {
      content: 'Hello World'
    },
    'https://www.instagram.com/': {
      content: 'Hello World'
    },
    'https://instagram.com/': {
      content: 'Hello World'
    },
    
    'https://zh.xhamster.com/': {
      content: 'Hello World'
    },
    'https://www.xhamster.com/': {
      content: 'Hello World'
    },
    'https://www.xnxx.com/': {
      content: 'Hello World'
    },
    'https://www.xvideos.com/': {
      content: 'Hello World'
    },
    'https://www.pornhub.com/': {
      content: 'Hello World'
    },
    'https://www.onlyfans.com/': {
      content: 'Hello World'
    },
    'https://onlyfans.com/': {
      content: 'Hello World'
    },
    'https://www.youporn.com/': {
      content: 'Hello World'
    },
    'https://youporn.com/': {
      content: 'Hello World'
    },
    'https://www.pixiv.net/': {
      content: 'Hello World'
    },
  }
})
