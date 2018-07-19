Object.prototype.deTemplate = function(dep) {
    let ret = [];
    let comp = this;
    dep = dep || '\t';
    if (comp.children) {
        comp.children.forEach(component => {
            if (component.name) {
                ret.push(component.deTemplate(dep + '\t'))
            }
        });
    }
    let props = {}
    if (comp.id && comp.props) {
        props[comp.id.split('-').join('')] = comp.props;
    }
    let obj = {
        template: dep + '<' + comp.name + (comp.slot ? ' :slot="' + comp.slot + '"' : '') + (comp.props ? ' :props="' + comp.id.split('-').join('') + '"' : '') + '>' + '\r\n\t' + dep + (ret.map(one => one.template)).join('\r\n\t' + dep) + '\r\n' + dep + '</' + comp.name + '>',
        props: Object.assign.apply(null,ret.map(one => one.props).concat(props))
    };
    return obj;
};
console.log('a')
