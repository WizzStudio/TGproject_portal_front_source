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
                    resolve(JSON.parse(body))
                } else {
                    reject({
                        error: err,
                        msg: res.statusMessage
                    })
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