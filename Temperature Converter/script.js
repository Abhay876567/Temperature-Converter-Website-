function convertTo(targetUnit) {
    const celsiusInput = document.getElementById('celsius');
    const resultDiv = document.getElementById('result');

    const celsiusValue = parseFloat(celsiusInput.value);

    if (isNaN(celsiusValue)) {
        resultDiv.innerText = 'Please enter a valid temperature';
        return;
    }

    let convertedValue;
    let unitLabel;

    if (targetUnit === 'fahrenheit') {
        convertedValue = (celsiusValue * 9/5) + 32;
        unitLabel = 'Fahrenheit';
    } else if (targetUnit === 'kelvin') {
        convertedValue = celsiusValue + 273.15;
        unitLabel = 'Kelvin';
    }

    resultDiv.innerText = `${celsiusValue} Celsius is ${convertedValue.toFixed(2)} ${unitLabel}`;
}
