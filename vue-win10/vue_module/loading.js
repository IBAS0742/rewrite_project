Vue.component("loading",{
    template : 
    '<div class="loader loading_loader">' +
    '    <div class="loading">' +
    '        <div class="dot"></div>' +
    '        <div class="dot"></div>' +
    '        <div class="dot"></div>' +
    '        <div class="dot"></div>' +
    '        <div class="dot"></div>' +
    '    </div>' +
    '    <div style="padding-top: 110px;">{{message}}</div>' +
    '</div>',
    props : ['message'],
    mounted : function () {
        var w_l = function () {};
        if (typeof window.onresize == 'function') {
            w_l = window.onresize;
        }
        window.onresize = function () {
            w_l();
            var loading = document.getElementsByClassName("loading_loader")[0];
            loading.style.paddingTop = ((window.document.body.clientHeight- 100) / 2) + "px";
        }
        var loading = document.getElementsByClassName("loading_loader")[0];
        loading.style.paddingTop = ((window.document.body.clientHeight- 100) / 2) + "px";
    }
});