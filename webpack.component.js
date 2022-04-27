const { VueLoaderPlugin } = require('vue-loader');
const glob = require('glob');
const path = require('path');
const list = {};

async function makeList(dirPath, target) {
    const files = glob.sync(`${dirPath}/**/index.js`);
    console.log('files:', files);
    for (let file of files) {
        const component = file.split(/[/.]/)[2]
        console.log(component)
        target[component] = `./${file}`;
    }
    console.log(target)
}

makeList('components/lib', list);


module.exports = {
    entry: list,
    mode:'development',
    output: {
        filename: '[name].umd.js',
        path: path.resolve(__dirname,'dist'),
        library: 'mui',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}
