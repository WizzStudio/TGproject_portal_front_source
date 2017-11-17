import * as fs from 'fs'

const bugLog = (errString:string) => {

    let error_data = `****************************************${new Date()}**********************\n${errString}\n`

    fs.stat('./bugLog.txt', (err, data) => {
        if (err) {
            if (err.errno == -2) {
                fs.writeFile('./bugLog.txt', error_data, function (err) {
                    if (err) {
                        console.log(err)
                    }

                })
            } else {
                return console.log(err)
            }
        }
        if (data.size > 1048576) {
            fs.writeFile('./bugLog.txt', error_data, function (err) {
                if (err) {
                    console.log(err)
                }

            })
        } else {
            fs.appendFile('./bugLog.txt', error_data, function (err) {
                if (err) {
                    console.log(err)
                }

            })
        }

    })


}


export default bugLog