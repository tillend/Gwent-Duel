
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

	
});

