var exec = require('child_process').exec;
var fs = require('fs')

fs.readFile('./syncFile.bat','utf-8',function (err,ret) {
    if (err) {
        console.log(err)
    } else {
        ret.split('\n').forEach(cmd => {
            if (cmd.length && cmd[0] != ':') {
                console.log(cmd)
                exec(cmd,(err,stdOut,stdErr) => {
                    console.log('err',err)
                    // console.log('stdOut',stdOut)
                    console.log('stdErr',stdErr)
                })
            }
        })
    }
})