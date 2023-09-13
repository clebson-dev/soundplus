function calculate() {
    const frequency = parseFloat(document.getElementById('frequency').value)
    const impedance = parseFloat(document.getElementById('impedance').value)
    const power = parseFloat(document.getElementById('power').value)
    
    const capacitance = 1 / (2 * Math.PI * frequency * impedance * 1e-6)
    const voltage = Math.sqrt(power * impedance)
    
    document.getElementById('result').innerHTML = `
        <p>Capacitância Recomendada: ${capacitance.toFixed(2)} uF</p>
        <p>Voltagem Recomendada: ${voltage.toFixed(2)} V</p>
    `
}