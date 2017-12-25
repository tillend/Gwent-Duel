
chrome.tabs.query({
    active       : true,
    currentWindow: true
}, function (tabs) {
	
    //var url = tabs[0].url;
    var bg = document.getElementById("bg");
    var inside = document.getElementById("in");
    
    bg.addEventListener('click', showInput);
    
    //显示输入界面
    function showInput(){
        var text;

        //inside.style.display = 'none';
        window.location.href = "input.html";
    }
    
    //显示计算结果
    function showResult(){
        img.classList.add('hide');
        txt.style.display = 'block';

        txt.value = txt.value.trim();
        txt.select();
    }
    
    //计算收益
    function calc() {

    }
    
    //显示背景图
    function showBackground() {
        inside.style.display = 'block';
    }
	
});

