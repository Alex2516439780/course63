function convertCurrency() {
    let amount = parseFloat(document.getElementById('amount').value);
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;
    let result;

    // Conversion rates - you can customize these based on actual rates
    const usdToUzsRate = 12700;
    const uzsToUsdRate = 12700;

    if (fromCurrency === 'usd' && toCurrency === 'uzs') {
        result = amount * usdToUzsRate;
        document.getElementById('result').textContent = result + ' UZS';
    } else if (fromCurrency === 'uzs' && toCurrency === 'usd') {
        result = amount / uzsToUsdRate;
        document.getElementById('result').textContent = result + ' USD';
    } else {
        // Handle the case when conversion is not defined
        document.getElementById('result').textContent = 'Пздц';

        
    }
}