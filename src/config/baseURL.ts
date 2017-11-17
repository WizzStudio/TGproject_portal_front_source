/*ENV='dev' or 'prod'*/
const env:string = process.env.ENV || 'dev'
let baseURL:string;

if (env == 'dev') {
    baseURL ='http://47.95.253.94:8080'
}else if (env == 'prod') {
    baseURL =''
}else {
    baseURL = 'error'
}

export default baseURL

