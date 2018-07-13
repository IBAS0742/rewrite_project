HTMLCollection.prototype.forEach = function(f) {
    let hc = this;
    for (let i = 0;i < hc.length;i++) {
        f(hc[i],i)
    }
};

HTMLElement.prototype.childForEach = function(name,f) {
    this.getElementsByTagName(name).forEach(f)
};

var buildObj = function (tbody) {
    let ret = [];
    try {
        tbody.childForEach('tr', (tr) => {
            let line = []
            tr.childForEach('td', (td) => {
                line.push(td.innerText.toLowerCase());
            });
            // range, defaultV, type, desc
            ret.push('"' + line[0] + '"' +
                ': buildYduiProps(' + (line[3] !== '-' ? '[ "' + line[3].split(',').join('", "') + '" ]' : "null") + ', ' +
                ((line[2] === 'Number') ? (line[4] !== '-' ? line[4] : 'null') : (line[4] !== '-' ? '"' + line[4] + '"' : "null")) + ', "' +
                line[2].toLowerCase() + '", "' +
                line[1] + '")'
            )
        });
        console.log(ret.join(',\r\n'))
    } catch (e) {
        console.log('e')
    }
    return ret
};

document.body.childForEach('tbody',(tbody) => buildObj(tbody))
