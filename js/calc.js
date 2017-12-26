window.onload = function() {
    var submit = document.getElementById("submit");
    submit.addEventListener('click', calc);
};

function calc() {
    var result = 0;

    var powerA = document.getElementById("powerA").value;
    var shellA = document.getElementById("shellA").value;
    var powerB = document.getElementById("powerB").value;
    var shellB = document.getElementById("shellB").value;

    if (!judgeParam(powerA, shellA, powerB, shellB)) {
        alert("参数错误");
        //window.location.href = "input.html";
    }

    if (powerA < powerB) {
        result = calcDetail(parseInt(powerA), parseInt(shellA), parseInt(powerB), parseInt(shellB));
    } else {
        result = calcDetail(parseInt(powerB), parseInt(shellB), parseInt(powerA), parseInt(shellA));
    }

    alert(result);
    return result;
}

//入参判断
function judgeParam(a, b, c, d) {
    return notNull(a) && notNull(b) && notNull(c) && notNull(d) && 
    	checkNumber(a) && checkNumber(b) && checkNumber(c) && checkNumber(d) && 
    	(a > 0) && (b >= 0) && (c > 0) && (d >= 0);
}

function notNull(input) {
    return input != null;
}

//验证字符串是否是数字
function checkNumber(chr) {
  var reg = /^[0-9]+.?[0-9]*$/;
  if (reg.test(chr)) {
    return true;
  }
  return false;
}


function calcDetail(powerA, shellA, powerB, shellB) {
    var damage; //能造成的伤害
    var effect = 0; //伤害能造成的收益
    if (powerA <= 0) {
        return effect;
    }

    damage = powerA;
    if (damage < shellB) {
        shellB = shellB - damage;
    } else {
        damage = damage - shellB;
        shellB = 0;
        //得出单次决斗所造成的伤害的收益
        effect = min(powerB, damage);
        powerB = powerB - damage;
    }

    return calcDetail(powerB, shellB, powerA, shellA) + effect;

}

function min(a, b){
	if(a < b){
		return a;
	}else{
		return b;
	}
}