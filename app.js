// Storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Load tasks
// Helpers
// Save tasks to localStorage
const save = () => localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks

// Elements
const nameEl = document.getElementById("name"); // Input Elements
const catEl  = document.getElementById("cat");
const dueEl  = document.getElementById("due");
const statEl = document.getElementById("stat");
const addBtn = document.getElementById("add");

// Filter Elements //
const fStatus = document.getElementById("fStatus");
const fCat    = document.getElementById("fCat");
const fClear  = document.getElementById("fClear");

// Rows and messages
const rows   = document.getElementById("rows");
const emptyP = document.getElementById("empty");
const sr     = document.getElementById("sr");

addBtn.onclick = () => { // Add task
  const name = nameEl.value.trim();
  if (!name) return alert("Please enter a task name.");

  const category = catEl.value.trim();
  const due = dueEl.value;
  const status = statEl.value; // Get values
  if (due && due < todayISO()) {
    if (!confirm("Due date is in the past. Continue?")) return;
  }

  // Add task
  tasks.push({ id: Date.now(), name, category, due, status });
  save();
  normalizeOverdues();

  // Clear inputs
  nameEl.value = "";
  catEl.value  = "";
  dueEl.value  = "";
  statEl.value = "In Progress";

  render(); // Re-render (Check notes)
};

// Render function
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

  // accessibility announcement
  sr.textContent = `${filtered.length} tasks shown`;

  rows.innerHTML = "";
  if (filtered.length === 0) {
    emptyP.style.display = "block";
    return;
  }

  emptyP.style.display = "none";

  for (const t of filtered) {
    const overdue = isOverdue(t);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${t.name}</td>
      <td>${t.category || "-"}</td>
      <td style="color:${overdue ? 'red' : 'inherit'}">${t.due || "-"}</td>
      <td>${overdue ? "Overdue" : t.status}</td>
      <td>
        <button onclick="toggle(${t.id})">
          ${t.status === "Completed" ? "Mark In Progress" : "Mark Completed"}
        </button>
        <button onclick="editTask(${t.id})">Edit</button>
        <button onclick="removeTask(${t.id})">Delete</button>
      </td>
    `;
    rows.appendChild(tr);
  }
}

// Filters
fClear.onclick = () => {
  fStatus.value = "All";
  fCat.value = "";
  localStorage.setItem("fStatus", "All");
  localStorage.setItem("fCat", "");
  render();
};

fStatus.onchange = () => { localStorage.setItem("fStatus", fStatus.value); render(); };
fCat.oninput     = () => { localStorage.setItem("fCat", fCat.value); render(); };

fStatus.value = localStorage.getItem("fStatus") || "All";
fCat.value    = localStorage.getItem("fCat") || "";



// Local-midnight today in YYYY-MM-DD
const todayISO = () => {
  const d = new Date();
  d.setHours(0,0,0,0);
  return d.toISOString().slice(0,10);
};

// Check if a task is overdue
const isOverdue = (t) => {
  if (!t.due || t.status === "Completed") return false;
  const due = new Date(t.due);
  const today = new Date();
  today.setHours(0,0,0,0);
  return due < today;
};

// Automatically mark and save overdue tasks
function normalizeOverdues() {
  let changed = false;
  for (const t of tasks) {
    if (t.status !== "Completed" && isOverdue(t) && t.status !== "Overdue") {
      t.status = "Overdue";
      changed = true;
    }
  }
  if (changed) save();
}

// Remove task
function removeTask(id) {
  tasks = tasks.filter(x => x.id !== id);
  save(); 
  normalizeOverdues(); 
  render();
}

// Toggle status
function toggle(id) {
  const t = tasks.find(x => x.id === id);
  if (!t) return;
  t.status = t.status === "Completed" ? "In Progress" : "Completed";
  save();
  normalizeOverdues();
  render();
}

function editTask(id) {
  const t = tasks.find(x => x.id === id);
  if (!t) return;

  const newName = prompt("Edit task name:", t.name);
  if (newName === null) return; // canceled
  const name = newName.trim();
  if (!name) return alert("Task name cannot be empty.");

  const newCat = prompt("Edit category:", t.category || "");
  if (newCat === null) return;

  const newDue = prompt("Edit due date (YYYY-MM-DD):", t.due || "");
  if (newDue === null) return;

  // basic date sanity check
  // Validate date format 
  // Reference: MDN RegExp https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_expressions
  if (newDue && !/^\d{4}-\d{2}-\d{2}$/.test(newDue)) { // 
    return alert("Please use YYYY-MM-DD for dates.");
  }

  t.name = name;
  t.category = newCat.trim();
  t.due = newDue.trim();
  save(); 
  normalizeOverdues();
  render();
}

// Profile and instructor alerts
document.getElementById("profilePic").addEventListener("click", () => {
  alert("Per Scholas Student: Dewan Mahmud - Software Engineer (MERN Stack)");
});

document.querySelectorAll(".teacher-pic").forEach(pic => {
  pic.addEventListener("click", (e) => {
    const name = e.target.nextElementSibling.textContent;
    alert(`Instructor: ${name} - Per Scholas Software Engineering Program`);
  });
});

// Accessibility: Focus name input on load and Enter key to add
document.addEventListener("DOMContentLoaded", () => nameEl.focus());
nameEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addBtn.click();
});

normalizeOverdues();
render();

/*Refs: I mostly used references for Html and js
- HTML: https://developer.mozilla.org/en-US/docs/Web/HTML
- JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/
