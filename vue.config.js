const path = require('path')

const resolve = (dir) => path.join(__dirname, dir)

const isProduction = process.env.NODE_ENV === 'production'

const URL = '172.10.120.92'

// 开发环境：测试目录页
const devPages = {
    // index: {
    //     entry: './src/main.js',
    //     template: './public/index.html',
    //     filename: 'index.html',
    //     title: '测试目录页',
    // },
}

// 生产环境：页面配置
const pordPages = {
    templateModuleEditor: {
        // 设计器界面
        entry: './src/main.js',
        template: './public/index.html',
        filename: 'index.html',
        title: '模板设计器',
    },
}

Object.assign(devPages, pordPages)

module.exports = {
    //这个参数可以把静态资源路径变成相对路径
    publicPath: '/vs2/',
    //构建好的文件放在哪个目录
    outputDir: 'dist/vs2',
    //放静态资源（js、css、image、fonts）
    assetsDir: './static',
    runtimeCompiler: false, // 运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    lintOnSave: false, // 关闭ESLint编译
    pages: isProduction ? pordPages : devPages,

    chainWebpack: (config) => {
        config.resolve.alias
            .set('root', resolve('/'))
            .set('vue$', 'vue/dist/vue.esm.js')
            .set('@', resolve('src'))
            .set('@utils', resolve('src/utils'))
            .set('@assets', resolve('src/assets'))

        if (isProduction) {
            // 删除预加载
            config.plugins.delete('preload')
            config.plugins.delete('prefetch')
            // 压缩代码
            config.optimization.minimize(true)
            //   分割代码
            //   config.optimization.splitChunks({
            //     chunks: "all"
            //   });
        }
    },
    // 打包相关
    configureWebpack: (config) => {
        config.resolve.extensions = ['.js', '.vue', '.json']

        if (!isProduction) {
            // 非开发情况下启动sourceMap
            config.devtool = 'source-map'
            // config.output.devtoolModuleFilenameTemplate = (info) => {
            //     const resPath = info.resourcePath
            //     if (
            //         (/\.vue$/.test(resPath) && info.allLoaders !== '') ||
            //         /node_modules/.test(resPath)
            //     ) {
            //         return `webpack:///${resPath}?${info.hash}`
            //     }
            //     return `webpack:///${resPath.replace('./src', 'SouceCode')}`
            // }
        }
    },
    css: {
        // CSS 相关的 loader 传递选项
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [],
            },
        },
    },
    devServer: {
        port: 9000,
        proxy: {
            '/login': {
                target: `http://${URL}`,
                changeOrigin: true,
                autoRewrite: true,
                pathRewrite: {
                    '^/login': '/login',
                },
            },
            '/api': {
                target: `http://${URL}`,
                changeOrigin: true,
            },
            '/': {
                target: `http://${URL}`,
                changeOrigin: true,
            },
        },
        sockHost: 'demo.my-domain.com',
        disableHostCheck: true,
    },
}
