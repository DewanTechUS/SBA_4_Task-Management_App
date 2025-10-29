// Storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Elements
const nameEl = document.getElementById("name"); // Input Elements
const catEl  = document.getElementById("cat");
 const dueEl  = document.getElementById("due");
const statEl = document.getElementById("stat");
 const addBtn = document.getElementById("add");
// Filter Elements
const fStatus = document.getElementById("fStatus");
 const fCat    = document.getElementById("fCat");
 const fClear  = document.getElementById("fClear");
// Rows and messages
const rows   = document.getElementById("rows");
 const emptyP = document.getElementById("empty");
  const sr = document.getElementById("sr");

addBtn.onclick = () => { // Add task
  const name = nameEl.value.trim();
  if (!name) return alert("Please enter a task name.");

  const category = catEl.value.trim();
  const due = dueEl.value;
  const status = statEl.value;// Get values
  if (due && due < todayISO()) {
  if (!confirm("Due date is in the past. Continue?")) return;
}

// Add task
  tasks.push({ id: Date.now(), name, category, due, status });
  save();
// Clear inputs
  nameEl.value = "";
  catEl.value  = "";
  dueEl.value  = "";
  statEl.value = "In Progress";

  render(); // Re-render (Check notes)
};
function render() {
  const statusFilter = fStatus.value;
  const catFilter = (fCat.value || "").trim().toLowerCase();

  const filtered = tasks.filter(t => {
    let okStatus = true;
    if (statusFilter === "Overdue") okStatus = isOverdue(t);
    else if (statusFilter !== "All") okStatus = t.status === statusFilter;

    const byCat = !catFilter || (t.category || "").toLowerCase().includes(catFilter);
    return okStatus && byCat;
  });

  sr.textContent = `${filtered.length} tasks shown`; // Announce count for accessibility
  rows.innerHTML = "";
  if (filtered.length === 0) { emptyP.style.display = "block"; return; }
  emptyP.style.display = "none";

  for (const t of filtered) {
    const tr = document.createElement("tr");
    const overdue = isOverdue(t);
    tr.innerHTML = `
      <td>${t.name}</td>
      <td>${t.category || "-"}</td>
      <td style="color:${overdue ? 'red' : 'inherit'}">${t.due || "-"}</td>
      <td>${overdue ? "Overdue" : t.status}</td>
      <td>
        <button onclick="toggle(${t.id})">${t.status === "Completed" ? "Mark In Progress" : "Mark Completed"}</button>
        <button onclick="removeTask(${t.id})">Delete</button>
      </td>
    `;
    rows.appendChild(tr);
  }
}
fCat.oninput = render;
fClear.onclick = () => { fStatus.value = "All"; fCat.value = ""; render(); };
fStatus.onchange = () => { localStorage.setItem("fStatus", fStatus.value); render(); };
fCat.oninput = () => { localStorage.setItem("fCat", fCat.value); render(); };
   fStatus.value = localStorage.getItem("fStatus") || "All";
  fCat.value    = localStorage.getItem("fCat") || "";
render();


// Helpers
const save = () => localStorage.setItem("tasks", JSON.stringify(tasks)); // Save to localStorage
const todayISO = () => new Date().toISOString().slice(0,10); // YYYY-MM-DD // ISO format
const isOverdue = (t) => t.due && t.status !== "Completed" && t.due < todayISO(); // Check overdue

// Render (stub) // To be filled next
function render() { /* filled next steps */ }
render(); // Initial render
function render() {
  // announce count for accessibility
  sr.textContent = `${tasks.length} tasks total`;
// Clear existing rows
  rows.innerHTML = ""; //
  if (tasks.length === 0) { // Show empty message
    emptyP.style.display = "block";
    return;
  }
  emptyP.style.display = "none";
// Populate rows // Iterate tasks //  
  for (const t of tasks) {
    const tr = document.createElement("tr");
    const overdue = isOverdue(t);
// Check overdue and set color
//reference: MDN conditional (ternary) operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// Action buttons // Toggle status and Delete buttons// 
function toggle(id) {
  const t = tasks.find(x => x.id === id);
  if (!t) return;
  t.status = t.status === "Completed" ? "In Progress" : "Completed"; //
  save(); render();
}
//--
    tr.innerHTML = ` 
     <td>${t.name}</td>
    <td>${t.category || "-"}</td>
      <td style="color:${overdue ? 'red' : 'inherit'}">${t.due || "-"}</td>
    <td>${overdue ? "Overdue" : t.status}</td>
     <td>
     
<button onclick="toggle(${t.id})">${t.status === "Completed" ? "Mark In Progress" : "Mark Completed"}</button>
        <button onclick="removeTask(${t.id})">Delete</button>
      </td>
    `;// Set inner HTML
    rows.appendChild(tr);
  }
}
// Remove task
function removeTask(id) {
  tasks = tasks.filter(x => x.id !== id);
  save(); render();
}
fStatus.onchange = render; // Re-render on filter change

// Accessibility: Focus name input on load and Enter key to add
document.addEventListener("DOMContentLoaded", () => nameEl.focus());
nameEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addBtn.click();
});
