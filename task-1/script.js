document.getElementById("sumButton").addEventListener('click', function calculateSum() {
    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);
    let input3 = Number(document.getElementById("input3").value);
  
    let sum = input1 + input2 + input3;
  
    document.getElementById("sumInput").value = sum;
  });

  calculateSum();
