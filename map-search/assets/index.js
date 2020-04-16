var text = ''

utools.onPluginEnter(({ code, type, payload }) => {
    utools.setExpendHeight(0);
    if(code == 'search'){
        utools.setSubInput(({text}) => {
            this.text = text
        }, "请输入需要搜索的地名");
        if(type=='over'){
            utools.setSubInputValue(payload);
            search_place(payload);
        }
    }
});

// 键盘事件
$(document).keydown(e => {
    switch (e.keyCode) {
        case 13:
            search_place(text)
            break;
    }
});

// 查找地点
function search_place(addr){
    if ('' == addr) {
        return;
    }
	
	webopen('https://uri.amap.com/search?keyword=' + addr);
	
	utools.outPlugin();
}
