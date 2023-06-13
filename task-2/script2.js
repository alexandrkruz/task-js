document.getElementById('resultButton').addEventListener('click', function calculateSum() {
    let inputs = document.getElementsByClassName('num');
    let sum = 0;

    for (let i = 0; i < inputs.length; i++) {
      let inputValue = parseInt(inputs[i].value);
      if (!isNaN(inputValue)) {
        sum += inputValue;
      }
    }

    document.getElementById('result').value = sum;
  });

  calculateSum();