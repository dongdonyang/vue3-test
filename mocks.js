/**
 * 1，读取当前目录mock文件下所有js文件
 * 2，获取js文件内容，生成本地接口服务
 */
import http from 'http'

const hostname = '127.0.0.1'
const port = 3000

const serve = http.createServer((req, res) => {
    console.log(req);
    res.statusCode = '200';
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello Word!')
});

serve.listen(port, hostname, () => {
    console.log(`服务器运行在${hostname}:${port}/`);
})