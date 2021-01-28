function temperatureConverterFC(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML = (valNum - 32) / 1.8;
}

function temperatureConverterCF(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheit").innerHTML = (valNum * 9) / 5 + 32;
}
