document.getElementById("jobApplicationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    // check is position is null
    let position = document.getElementById("position");
    if (position) {
        position = position.value;
    } else {
        position = document.getElementById("otherPosition").value;
    }


    let website = document.getElementById("website").value;
    let linkedin = document.getElementById("linkedin").value;
    let google_scholar = document.getElementById("google_scholar").value;
    let quantum_experience = document.getElementById("quantum_experience").value;
    let patent_experience = document.getElementById("patent_experience").value;
    let highest_degree = document.getElementById("highest_degree").value;
    let skills = document.getElementById("skills").value;
    let email = "office@beit.tech";
    let subject = `[BEIT Canada] Job Application - ${name}`;
    let body = `Name: ${name}\n\nPosition: ${position}\n\nPersonal Website: ${website}\n\nLinkedIn Profile: ${linkedin}\n\nGoogle Scholar: ${google_scholar}\n\nYears of Experience in Quantum Computing: ${quantum_experience}\n\nYears of Experience in Patent Applications: ${patent_experience}\n\nHighest Degree Obtained: ${highest_degree}\n\nAdditional Comments:\n${skills}\n\n*Please Attach Your CV to This Email*`;
    let mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
});


function getQueryParam(param) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(param);
}


document.addEventListener("DOMContentLoaded", function () {
    const positionQueryParam = getQueryParam("position");
    if (positionQueryParam) {
        const positionSelect = document.getElementById("position");
        const positionExists = Array.from(positionSelect.options).some(option => option.value === positionQueryParam);
        if (positionExists) {
            positionSelect.value = positionQueryParam;
        } else {
            positionSelect.remove(); // Remove the position dropdown

            // Create a new hidden input with the name "position" and the value from the query parameter
            const hiddenPositionInput = document.createElement("input");
            hiddenPositionInput.type = "hidden";
            hiddenPositionInput.name = "position";
            hiddenPositionInput.value = positionQueryParam;
            document.getElementById("jobApplicationForm").appendChild(hiddenPositionInput);

            // Show the custom position input with the position from the query parameter
            document.getElementById("otherPositionContainer").classList.remove("hidden");
        }
    }
});
