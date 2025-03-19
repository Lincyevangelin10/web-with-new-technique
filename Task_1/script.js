document.getElementById("carbonForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const distance = parseFloat(document.getElementById("distance").value);
    const transport = document.getElementById("transport").value;

    // Emission factors (kg CO2 per km)
    const emissionFactors = {
        car: 0.21,
        bus: 0.10,
        train: 0.06,
        bicycle: 0,
        walk: 0
    };

    const footprint = distance * (emissionFactors[transport] || 0);
    document.getElementById("result").innerHTML = `Carbon Footprint: ${footprint.toFixed(2)} kg CO2`;

    // Suggestions
    let suggestionText = "";
    if (transport === "car") {
        suggestionText = "Try public transport, biking, or walking for shorter distances.";
    } else if (transport === "bus") {
        suggestionText = "Consider carpooling or using a train if possible.";
    } else if (transport === "train") {
        suggestionText = "You're making a great choice! Trains are eco-friendly.";
    } else {
        suggestionText = "You're already using a green option!";
    }

    document.getElementById("suggestions").innerHTML = suggestionText;
});
