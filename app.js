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
addBtn.onclick = () => {
  const name = nameEl.value.trim();
  if (!name) return alert("Please enter a task name.");

  const category = catEl.value.trim();
  const due = dueEl.value;
  const status = statEl.value;// Get values
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

  // Filter
  const statusFiltered = tasks.filter(t => {
    if (statusFilter === "All") return true;
    if (statusFilter === "Overdue") return isOverdue(t);
    return t.status === statusFilter;
  });

  sr.textContent = `${statusFiltered.length} tasks shown`;

  rows.innerHTML = "";
  if (statusFiltered.length === 0) {
    emptyP.style.display = "block";
    return;
  }
  emptyP.style.display = "none";

  for (const t of statusFiltered) {
    /* same row construction as before */
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
fStatus.onchange = render;