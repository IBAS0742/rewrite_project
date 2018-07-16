HTMLCollection.prototype.forEach = function(f) {
    let hc = this;
    for (let i = 0;i < hc.length;i++) {
        f(hc[i],i)
    }
};

HTMLElement.prototype.childForEach = function(name,f) {
    this.getElementsByTagName(name).forEach(f)
};

var dearWithProps = (line) => {
    return '\'' + ('"' + line[0] + '"' +
        ': buildYduiProps(' + (line[3] !== '-' ? '[ "' + line[3].split(',').join('", "') + '" ]' : "null") + ', ' +
        ((line[2] === 'Number') ? (line[4] !== '-' ? line[4] : 'null') : (line[4] !== '-' ? '"' + line[4] + '"' : "null")) + ', "' +
        line[2].toLowerCase() + '", "' +
        line[1].replace(/"/g,'\'') + '")').replace(/'/g, '\\\'') + '\'';
}

var dearWithSlot = (line) => {
    return "'" + line[0] + '\': \'' + line[1] + "'"
}

var buildObj = function (tbody) {
    let ret = [];
    let type = 5
    try {
        tbody.childForEach('tr', (tr) => {
            let line = [];
            tr.childForEach('td', (td) => {
                line.push(td.innerText.toLowerCase());
            });
            // range, defaultV, type, desc
            ret.push(
                line.length == 5 ? dearWithProps(line) : dearWithSlot(line)
            )
            type = line.length
        });
        console.log(ret.join(',\r\n'))
    } catch (e) {
        console.log('e')
    }
    return ret
};

clear()
document.body.childForEach('tbody',(tbody) => buildObj(tbody))

// 构造 buildAll 源码
var nav = document.getElementsByTagName('nav')[0]
var tpl =
'util.build(util.buildNames({\n' +
'    #name#: {\n' +
'        name: \'#cname#\',\n' +
'        props: [],\n' +
'        slot: {\n' +
'        }\n' +
'    }\n' +
'}), \'#name#\');'
var arrs = []
nav.childForEach('dd',dd => {
    let iner = dd.getElementsByTagName('a')[0].innerHTML
    if (/<span>[a-zA-Z]+<\/span>/.test(iner)) {
        let spl = iner.split(/<span>|<\/span>/)
        arrs.push(tpl.replace(/#name#/g, spl[1]).replace(/#cname#/, spl[0]))
    }
})
arrs.join('\r\n')
