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

// Helpers
const save = () => localStorage.setItem("tasks", JSON.stringify(tasks)); // Save to localStorage
const todayISO = () => new Date().toISOString().slice(0,10); // YYYY-MM-DD // ISO format
const isOverdue = (t) => t.due && t.status !== "Completed" && t.due < todayISO(); // Check overdue

// Render (stub) // To be filled next
function render() { /* filled next steps */ }
render(); // Initial render
