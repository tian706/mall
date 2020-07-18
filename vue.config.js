module.exports = {
    devServer:{
        proxy:{
            '/listmore.json':{
                target:'https://m.lagou.com',
                changeOrigin:true
            },
            '/search.json':{
                target:'https://m.lagou.com',
                changeOrigin:true
            },
            
        }
    }
}

