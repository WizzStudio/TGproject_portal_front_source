import * as request from 'request'
import baseURL from '../config/baseURL'

export default (method: string = "GET", url: string = '', data?: object, headers?: object) => {

    let _url = baseURL + url
    // return request({
    //     url:baseURL+url,
    //     method:method.toUpperCase(),
    //     json:type=='json'||false,
    //     headers:headers,
    //     body:JSON.stringify(data)
    // })

    if (method.toUpperCase() == 'GET') {
        return new Promise((resolve, reject) => {
            request({
                url: _url,
                method: method.toUpperCase(),
                headers: headers,
            }, (err, res, body) => {
                if (!err && res.statusCode == 200) {
                    /*请求正常响应*/
                    resolve(JSON.parse(body))
                } else {
                    if (err && !res) {
                        /*请求未响应*/
                        reject({
                            error:err.code
                        })
                    }
                    else {
                        /*请求响应被拒绝*/
                        reject({
                            error: err.code,
                            msg: res.statusMessage,
                            code: res.statusCode,
                            url: res.url
                        })
                    }
                }
            })
        })
    }

    if (method.toUpperCase() == 'POST') {
    }
    if (method.toUpperCase() == 'DELETE') {
    }
    if (method.toUpperCase() == 'PUT') {
    }

}