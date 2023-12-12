function calculateBuoyantForce() {
  const density = document.getElementById('density').value;
  const volume = document.getElementById('volume').value;

  if (density && volume) {
    const buoyantForce = density * volume * 9.81; // Assuming gravity as 9.81 m/s^2
    document.getElementById('result').textContent = buoyantForce.toFixed(2);
  } else {
    alert('Please enter values for density and volume.');
  }
}
