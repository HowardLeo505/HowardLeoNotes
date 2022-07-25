module.exports = {
    lang: 'zh-CN',
    title: 'YOLO_Emperor的笔记',
    desctiption: '',
    head: [
        ['link', { rel: 'icon', href: '/logo.jpg' }],
        //['meta', { name: 'theme-color', content: ''}]
      ],
    themeConfig: {
        logo: '/logo.jpg',
        repo: 'HowardLeo505/',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        notFound: '什么都没找到',
        backToHome: '返回主页',
        toggleDarkMode: '切换夜间模式',
        nav: [
    // { text: '主页', link: '/' },
            { text: 'AI', link: '/AI/' },
            { text: '前端', link: '/frontend/'},
            { text: '算法', link: '/algorithm/' },
            { text: '关于', link: '/about/' }
      ],
    
        sidebar:{
        '/AI/': [
            {
                text: 'AI',
                children: [
                    '/AI/'
                ]
            }
        ],

        '/frontend/': [
            {
                text: '前端',
                children: [
                    '/frontend/',
                    '/frontend/html',
                    '/frontend/CSS'
                ]
            }
        ],

        '/algorithm/':[
            {
                text: '算法',
                children: [
                    '/algorithm/'
                ]
            }
        ],
        '/about/': [
            {
                text: '关于',
                children: [
                    '/about/'
                ]
            }
        ]
        },
    }
}