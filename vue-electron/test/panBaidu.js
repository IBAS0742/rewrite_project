!function(){
    (function(){
    var context={"loginstate":1,"username":"\u4e1c\u65b9\u7ae5\u8bdd\u4e50\u56ed","third":0,"flag":1,"file_list":null,"uk":975363895,"task_key":"79b03dbde9c146461bdb91bf50f1e351fc55c6e7","task_time":1531549973,"sampling":{"expvar":["disk_h5_pdf","disk_center_change","video_high_speed","disk_timeline"]},"bdstoken":"a6a72632ba8970606606f3c2ca10c644","is_vip":0,"bt_paths":null,"applystatus":1,"sign1":"c3547a77ec5fbdb13927501622a11fbd16f4d1fc","sign2":"function s(j,r){var a=[];var p=[];var o=\"\";var v=j.length;for(var q=0;q<256;q++){a[q]=j.substr((q%v),1).charCodeAt(0);p[q]=q}for(var u=q=0;q<256;q++){u=(u+p[q]+a[q])%256;var t=p[q];p[q]=p[u];p[u]=t}for(var i=u=q=0;q<r.length;q++){i=(i+1)%256;u=(u+p[i])%256;var t=p[i];p[i]=p[u];p[u]=t;k=p[((p[i]+p[u])%256)];o+=String.fromCharCode(r.charCodeAt(q)^k)}return o};","sign3":"e8c7d729eea7b54551aa594f942decbe","timestamp":1531549973,"timeline_status":1,"face_status":0,"srv_ts":1531549973,"need_tips":null,"is_year_vip":0,"show_vip_ad":0,"vip_end_time":null,"is_evip":0,"is_svip":0,"is_auto_svip":0,"activity_status":0,"photo":"https:\/\/ss0.bdstatic.com\/7Ls0a8Sm1A5BphGlnYG\/sys\/portrait\/item\/913ae826.jpg","curr_activity_code":0,"activity_end_time":0,"token":"8d56QS+C4tMRSaDib+2uVWpjqAs6N13p\/xWPrVGlNzuhDAtasQF98NVwyUf8jOsGKNbdLeFuj8Waje+UgsGZiP1s2dOTzA\/nu7GD5djPXRXXEIyHSVUxV6k5\/8oI8SA2nEueGshkiCRfSXqSPBsz0v2f6DRs8TeO+lg0DuZeFWJNlrX9ZH0EIqWJQwu21CgDaL4vcRQJfIrGbwy6GwhYCnulFr2pMlQkK0exiUFYB+NDhrtBH\/G+XqDOnc1QpwHx0FG07+8Q\/3fY+ijDAgHJHjd4W95Zsey0Bz9wjhDr","sharedir":0,"pansuk":"yJhP30hBxo3YPPsosf_fVg","vol_autoup":"0","urlparam":[],"XDUSS":"pansec_DCb740ccc5511e5e8fedcff06b081203-x23NBrotJwz4Amm%2Bts82hRPah3orqcOh8rw%2FEZkCQbRbvKCOQNj45hN7FXAmDBQcyEP0%2B4zBtHtCPa2HEI9NGUf9t5SzvqlYGG8Q3UwneCNhbx5XFV8HusMxegc5Qwa5%2FHvSZN9DeTsoQwtacbdiS5T9J4htlMIFPFeFa%2BlI35n%2BMnY9BkCGtPhMveCa3MVoDexpGLfueFV78DUuN9Xgj%2BlsR0iqFc42XfjR2BGDNa8VAwHhUnrr9Sht5ThMHOGsn8Ap9aX1KJMbo4yEX3WtpA%3D%3D"};
    var yunData = require('disk-system:widget/data/yunData.js');
    yunData.setData(context);
    yunData.setData('SERVERTIME', 1531549973803);
    yunData.setData('product','yun');
})();
}();
!function(){        var context = require('system-core:context/context.js').instanceForSystem;
    context.pluginControl.setArea({
        name: 'aside',
        selector: '.module-aside',
        className: 'aside-absolute-container',
        shortestDistance: 477
    });
    context.pluginControl.init();
    // 启动
    require('disk-system:widget/start/start.js');
}();
!function(){        require.async("disk-system:static/js/baidu-tongji.js");
}();