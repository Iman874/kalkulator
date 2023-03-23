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

function sumOpBagiKali(index, array, op, hasilOp,letak){
  const bil1 = parseFloat(array[index - 1]);
  const bil2 = parseFloat(array[index + 1]);

  if (op === "/"){
    if(index+2 == letak){
      hasilOp = bil1 / hasilOp;
    } else if (letak == index-2){
      hasilOp = hasilOp / bil2;
    } else {
      hasilOp = bil1 / bil2;
    }
  } else if (op === "x") {
    if(letak == index+2){
      hasilOp = bil1 * hasilOp;
    } else if (letak == index-2){
      hasilOp = hasilOp * bil2;
    } else {
      hasilOp = bil1 * bil2;
    }
  }
  return hasilOp;
}

function sumOpTambahKurang(index, array, op, hasilOp, letak){
  const bil1 = parseFloat(array[index - 1]);
  const bil2 = parseFloat(array[index + 1]);

  if(op === "+"){
    if(letak == index+2){
      hasilOp = bil1 + hasilOp;
    } else if (letak == index-2){
      hasilOp = hasilOp + bil2;
    } else {
      hasilOp = bil1 + bil2;
    }
  }
  else if(op === "-"){
    if(letak == index+2){
      hasilOp = bil1 - hasilOp;
    } else if (letak == index-2){
      hasilOp = hasilOp - bil2;
    } else {
      hasilOp = bil1 - bil2;
    }
  }
  return hasilOp;
}

function sumHasil() {
  var inputBox = document.getElementById("box");
  var hasil = document.getElementById("hasil");
  var coba = document.getElementById("coba");
  var sum = inputBox.value;
  var i = 0;
  var totalOp = 0;
  var temp = -2;
  var jumlah = 0;

  for(i=0;i<=sum.length;i++){
    if(sum[i] === "/") {
      jumlah = sumOpBagiKali(i,sum,"/",jumlah,temp);
      temp = i;
    }
    else if(sum[i] === "x") {
      jumlah = sumOpBagiKali(i,sum,"x",jumlah,temp);
      temp = i;
    }
    else if(sum[i] === "-"){
      jumlah = sumOpTambahKurang(i,sum,"-",jumlah,temp);
      temp = i;
    }
    else if(sum[i] === "+") {
      jumlah = sumOpTambahKurang(i,sum,"+",jumlah,temp);
      temp = i;
    }
  }
    hasil.value = jumlah;
}

function reset(){
  var inputBox = document.getElementById("box");
  var hasil = document.getElementById("hasil");
  if(inputBox.value != "0"){
      inputBox.value = "0";
      hasil.value = "0";
  }
}
