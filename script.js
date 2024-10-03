// Linear interpolation function (Lerp)
function lerp(start, end, t) {
    return start + (end - start) * t;
}

function startAnimation() {
    const box = document.getElementById('box');
    const speedInput = document.getElementById('speed');
    const speed = parseFloat(speedInput.value);  // Get speed value from slider
    const duration = 2000 / speed;  // Adjust duration based on speed (faster = shorter duration)
    const startTime = performance.now();
    const startX = 0;   // Start position (left)
    const endX = window.innerWidth - 50;  // End position (right)

    function animate(time) {
        const elapsed = time - startTime;
        const t = Math.min(elapsed / duration, 1);  // Calculate progress (0 to 1)
        
        // Apply linear interpolation to calculate the new position
        const currentX = lerp(startX, endX, t);
        box.style.left = `${currentX}px`;

        // Continue the animation if it's not complete
        if (t < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

// Update speed display next to slider
const speedSlider = document.getElementById('speed');
const speedValueDisplay = document.getElementById('speedValue');

speedSlider.addEventListener('input', function() {
    speedValueDisplay.textContent = `${speedSlider.value}x`;  // Display current speed
});
