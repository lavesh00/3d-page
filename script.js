// Select the model-viewer element
const modelViewer = document.getElementById("modelViewer");

// Set base camera parameters
const baseX = 0; // Base horizontal angle
const baseY = 75; // Fixed vertical angle
const baseDistance = "10m"; // Distance from the model

// Adjust the sensitivity for cursor movement
const sensitivity = 0.1; // Lower value for subtle tilt

// Add an event listener for mouse movement
document.addEventListener("mousemove", (event) => {
    // Get the mouse position relative to the viewport
    const x = (event.clientX / window.innerWidth - 0.5) * 2; // Map to -1 to 1
    const y = (event.clientY / window.innerHeight - 0.5) * 2; // Map to -1 to 1

    // Calculate the new camera orbit based on cursor position
    const newX = baseX + x * sensitivity * 10; // Adjust horizontal angle
    const newY = baseY - y * sensitivity * 5; // Adjust vertical angle slightly

    // Set the new camera orbit
    modelViewer.setAttribute("camera-orbit", `${newX}deg ${newY}deg ${baseDistance}`);
});
