var a;
a = [{
    "type": "template",
    "title": "template",
    "id": 0,
    "children": [{
        "title": "按钮",
        "type": "el",
        "name": "yd-button",
        "id": "first",
        "props": {},
        "style": {},
        "text": "ibas",
        "children": []
    }, {
        "title": "列表",
        "type": "el",
        "name": "yd-list-theme",
        "id": "second",
        "props": {"theme": 3},
        "style": {},
        "children": [{
            "name": "yd-list-item",
            "id": "fifth",
            "type": "el",
            "children": [{
                "title": "",
                "id": "third",
                "type": "el-slot",
                "have": true,
                "slot": "img",
                "name": "img",
                "domProps": {"src": "http//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg"}
            }, {
                "title": "",
                "id": "forth",
                "type": "el-slot",
                "slot": "title",
                "have": true,
                "name": "span",
                "text": "标题asdf"
            }]
        }]
    }, {
        "id": "list-1531463542714",
        "title": "列表",
        "name": "yd-list-theme",
        "realname": "yd-list",
        "props": {"theme": 3},
        "type": "el",
        "children": [{
            "id": "list-item-1531463545643",
            "title": "列表项",
            "name": "yd-list-item",
            "realname": "yd-list-item",
            "props": {"type": "a", "href": ""},
            "text": "list-item",
            "type": "el",
            "children": [{
                "slot": "img",
                "have": false,
                "desc": "",
                "id": "list-item-1531463545643img",
                "type": "slot",
                "title": "img"
            }, {
                "id": "list-item-1531463545643title",
                "name": "span",
                "realname": "span",
                "style": {},
                "text": "span",
                "type": "slot",
                "slot": "title",
                "have": true,
                "desc": "",
                "title": "title"
            }, {
                "slot": "other",
                "have": false,
                "desc": "",
                "id": "list-item-1531463545643other",
                "type": "slot",
                "title": "other"
            }],
            "style": {}
        }],
        "style": {}
    }]
}];
