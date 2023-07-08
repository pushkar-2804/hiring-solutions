// Search form submission
document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    const location = document.querySelector(
      '#searchForm input[name="location"]'
    ).value;
    const jobRoles = document.querySelector(
      '#searchForm input[name="jobRoles"]'
    ).value;

    // Send search request to the server
    axios
      .get("/search-candidates", {
        params: {
          location,
          jobRoles,
        },
      })
      .then((response) => {
        // Handle the retrieved candidates
        displayCandidates(response.data);
      })
      .catch((error) => {
        console.error("Error during candidate search:", error);
        alert("An error occurred during candidate search");
      });
  });

// Function to display the candidates
function displayCandidates(candidates) {
  const candidatesList = document.getElementById("candidatesList");
  candidatesList.innerHTML = ""; // Clear previous candidates

  if (candidates.length === 0) {
    candidatesList.innerHTML = "<p>No candidates found.</p>";
    return;
  }

  candidates.forEach((candidate) => {
    const candidateItem = document.createElement("div");
    candidateItem.classList.add("candidate");
    candidateItem.innerHTML = `
        <h3>${candidate.name}</h3>
        <p>Location: ${candidate.location}</p>
        <p>Job Role: ${candidate.jobRole}</p>
        <button class="rankButton" data-id="${candidate.id}">Rank</button>
      `;

    candidateItem
      .querySelector(".rankButton")
      .addEventListener("click", handleRanking);

    candidatesList.appendChild(candidateItem);
  });
}

//   // Function to handle candidate ranking
//   function handleRanking(event) {
//     const candidateId = event.target.getAttribute('data-id');
//     // Perform the necessary ranking action
//     // ...
//   }
