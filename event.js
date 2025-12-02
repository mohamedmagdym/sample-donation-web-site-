const eventsContainer = document.getElementById("events-container");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

const events = [
  // Your event data goes here
  // Each event could be an object with properties like title, date, etc.
  // Example: { title: "Event 1", date: "2023-12-01" }
  // You can replace this array with your actual event data
  { title: "Event 1" },
  { title: "Event 2" },
  { title: "Event 3" },
  { title: "Event 4" },
  { title: "Event 5" },
  { title: "Event 6" },
  { title: "Event 7" },
  { title: "Event 8" },
  { title: "Event 9" },
  { title: "Event 10" },
  { title: "Event 11" },
  { title: "Event 12" },
  { title: "Event 13" },
  { title: "Event 14" },
  { title: "Event 15" },
  { title: "Event 16" },
  { title: "Event 17" },
  { title: "Event 18" },
  { title: "Event 19" },
  { title: "Event 20" }
];

const eventsPerPage = 5; // Number of events to display per page
let currentPage = 0;

function displayEvents() {
  eventsContainer.innerHTML = ""; // Clear the events container

  const startIndex = currentPage * eventsPerPage;
  const endIndex = startIndex + eventsPerPage;
  const eventsToDisplay = events.slice(startIndex, endIndex);

  eventsToDisplay.forEach(event => {
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("event-div");
    eventDiv.textContent = event.title;
    eventsContainer.appendChild(eventDiv);
  });

  prevButton.disabled = currentPage === 0;
  nextButton.disabled = endIndex >= events.length;
}

prevButton.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    displayEvents();
  }
});

nextButton.addEventListener("click", () => {
  if ((currentPage + 1) * eventsPerPage < events.length) {
    currentPage++;
    displayEvents();
  }
});

// Initial display
displayEvents();