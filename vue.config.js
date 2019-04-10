module.exports = {
    outputDir: process.env.NODE_ENV === 'development' ? 'dev' : 'pro',
    devServer:{
        port: 8088
    }
};
