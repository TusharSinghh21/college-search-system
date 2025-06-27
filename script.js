let allColleges = [];

function fetchColleges() {
  fetch("/colleges")
    .then((res) => res.json())
    .then((data) => {
      allColleges = data;
      displayColleges(data);
    });
}

function displayColleges(colleges) {
  const table = document.getElementById("collegeTableBody");
  table.innerHTML = "";

  colleges.forEach((college) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${college.name}</td>
      <td>${college.city}</td>
      <td>${college.state}</td>
      <td>${college.courses}</td>
    `;
    table.appendChild(row);
  });
}

function filterColleges() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const filtered = allColleges.filter(
    (college) =>
      college.name.toLowerCase().includes(input) ||
      college.city.toLowerCase().includes(input) ||
      college.state.toLowerCase().includes(input)
  );
  displayColleges(filtered);
}