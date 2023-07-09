const token = localStorage.getItem("token");

function fetchAllCandidates() {
  axios
    .get("https://hiring-yjwj.onrender.com/api/candidate/all", {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      // Handle the retrieved candidates
      displayCandidates(response.data.candidates);
    })
    .catch((error) => {
      console.error("Error fetching all candidates:", error);
      alert("An error occurred while fetching all candidates");
    });
}

// Call fetchAllCandidates when the page loads
window.addEventListener("DOMContentLoaded", fetchAllCandidates);

// Search form submission
document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    const location = document.querySelector(
      '#searchForm input[name="location"]'
    ).value;
    const jobRole = document.querySelector(
      '#searchForm input[name="jobRole"]'
    ).value;

    // Send search request to the server
    axios
      .post(
        "https://hiring-yjwj.onrender.com/api/candidate/search",
        { location, jobRole },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        // Handle the retrieved candidates
        displayCandidates(response.data.candidates);
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
        <p>Job Role: ${candidate.job}</p>
      `;

    candidatesList.appendChild(candidateItem);
  });
}
