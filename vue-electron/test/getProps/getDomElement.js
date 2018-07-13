// http://www.w3school.com.cn/tags/index.asp

HTMLCollection.prototype.forEach = function(f) {
    let hc = this;
    for (let i = 0;i < hc.length;i++) {
        f(hc[i],i)
    }
};

HTMLElement.prototype.childForEach = function(name,f) {
    this.getElementsByTagName(name).forEach(f)
};

//获取一个元素的样式
//window.getComputedStyle(trs[6].children[0])

var trs = []
document.body.childForEach('tbody', body => {
    body.childForEach('tr', (tr, ind)=> {
        if (ind)
            trs.push(tr)
    })
})
trs.shift()
trs.shift()

var rets = []
trs.forEach(tr => {
    let tds = tr.children
    if (window.getComputedStyle(tds[0]).backgroundImage == 'none') {
        rets.push({
            name: tds[0].innerText.substring(1, tds[0].innerText.length - 1),
            desc: tds[1].innerText,
            h5: false
        })
    } else {
        rets.push({
            name: tds[0].innerText.substring(1, tds[0].innerText.length - 1),
            desc: tds[1].innerText,
            h5: false
        })
    }
})


