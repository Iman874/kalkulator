function hasil(expression){
  let stack = [];
  let current_num = 0;
  let current_op = "+";
  let isFractional = false;

  for (let i = 0; i < expression.length; i++) {
    let c = expression.charAt(i);

    if (!isNaN(parseFloat(c))) {
      current_num = current_num * 10 + parseFloat(c);
      if (isFractional) {
        isFractional = false;
        current_num /= 10;
      }
    } else if (c === '.') {
      isFractional = true;
    }

    if (isNaN(parseInt(c)) && c != " " || i == expression.length - 1) {
      if (current_op == "+") {
        stack.push(current_num);
      } if (current_op == "-") {
        stack.push(-current_num);
      } if (current_op == "x") {
        let last_num = stack.pop();
        stack.push(last_num * current_num);
      } if (current_op == "/") {
        let last_num = stack.pop();
        stack.push(last_num / current_num);
      }

      current_num = 0;
      current_op = c;
    }
  }

  let result = 0;
  while (stack.length > 0) {
    if(result === 0){
      result = stack.pop();
    } else{
        result = result + stack.pop();
      }
  }
  if (isNaN(result)) {
    return NaN;
    } else {
    if (Number.isInteger(result)) {
    return parseInt(result);
    } else {
    return parseFloat(result);
    }
  }
}


function sumHasil(){
  var jumlah = document.getElementById("box");
  var total = document.getElementById("hasil");
  var sum = jumlah.value;
  total.value = parseFloat(hasil(sum));
}



function reset(){
  var inputBox = document.getElementById("box");
  var hasil = document.getElementById("hasil");
  if(inputBox.value != "0"){
      inputBox.value = "";
      hasil.value = "";
  }
}

function numpad(angka) {
  var inputBox = document.getElementById("box");
  var test = inputBox.value;
  if(test == 0){
      inputBox.value = angka;
  }
  else inputBox.value += angka;
}

function operator(op){
  var inputBox = document.getElementById("box");
  var temp = inputBox.value;
  inputBox.value = temp + op;
}

function error(){
  window.alert("Format yang anda masuka salah");
}