window.onload = function() {
    var submit = document.getElementById("submit");
    submit.addEventListener('click', calc);
};

function calc() {
    var result;

    var powerA = document.getElementById("powerA").value;
    var shellA = document.getElementById("shellA").value;
    var powerB = document.getElementById("powerB").value;
    var shellB = document.getElementById("shellB").value;

    if (!judgeParam(powerA, shellA, powerB, shellB)) {
        //alert("参数错误");
        //window.location.href = "input.html";
    }

    if (powerA < powerB) {
        result = calcDetail(powerA, shellA, powerB, shellB);
    } else {
        result = calcDetail(powerB, shellB, powerA, shellA);
    }

    alert(result);
    return result;
}

//入参判断
function judgeParam(a, b, c, d) {
    return notNull(a) && notNull(b) && notNull(c) && notNull(d) && 
    	(typeof a == "number") && (typeof b == "number") && 
    	(typeof c == "number") && (typeof d == "number") && 
    	(a > 0) && (b >= 0) && (c > 0) && (d >= 0);
}

function notNull(input) {
    return input != null;
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