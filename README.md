#  SBA 4 - Task Management App
Student: Dewan Mahmud Per Scholas
Program: Per Scholas – Software Engineering (MERN Stack)
Cohort: 2025 – RTT 57

# Overview

This project implements a browser-based Task Management application using HTML, CSS, and JavaScript. Users can create, edit, delete, filter, and persist tasks with localStorage. The work demonstrates core JavaScript fundamentals, DOM manipulation, event handling, conditional logic, array methods, and simple data persistence.

# Features

- Add tasks with name, category, due date, and status  
- Edit existing tasks (name, category, due date)  
- Toggle status between *In Progress* and *Completed*  
- Delete tasks  
- Filter by status (All, In Progress, Completed, Overdue)  
- Filter by category (case-insensitive)  
- Overdue detection and visual indication  
- localStorage persistence for tasks and filters  
- Accessibility improvements (labels and live region)  
- Keyboard usability (Enter to add, initial focus)

# Learning Objectives
Use arrays and objects to manage application state
Manipulate the DOM to render lists and respond to events
Apply conditionals and array methods for filtering and status changes
Persist data with localStorage (getItem, setItem, JSON parse/stringify)
Write readable, maintainable front-end code with clear structure

# Project Structure
Task_Management_App
index.html    
style.css     
app.js        
ref_note.js 
Rocky400x400.jpg  
README.md     


# How to Run

Download or clone the repository.
Open index.html in a web browser. (Chrome)
Add tasks using the input fields and the Add button.
Use the filters to view tasks by status or category.
Close and reopen the page to confirm tasks persist via localStorage.

# Notes on Approach

Planned a minimal UI first (inputs, table, filters), then implemented functionality iteratively.
Separated concerns: HTML for structure, CSS for presentation, JavaScript for behavior.
Implemented render logic to rebuild the table from the current filtered state.
Stored tasks and filter choices in localStorage to persist across page reloads.
Added small accessibility touches (labels for inputs, aria-live region for screen readers).

# Key JavaScript Concepts Used

DOM APIs: getElementById, createElement, innerHTML, event handlers
Array methods: push, filter, find, map, iteration

# Conditionals and date comparisons for overdue detection
localStorage: getItem, setItem, JSON.parse, JSON.stringify

# References

## MDN Web Docs
DOM: https://developer.mozilla.org/docs/Web/API/Document_Object_Model
localStorage: https://developer.mozilla.org/docs/Web/API/Window/localStorage
Array methods: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
## W3Schools
JavaScript Arrays: https://www.w3schools.com/js/js_arrays.asp
JavaScript Objects: https://www.w3schools.com/js/js_objects.asp

# Reflection
Building this app strengthened my understanding of DOM manipulation, array operations, and client-side data persistence. I practiced structuring code for readability and learned to iterate features incrementally, adding filters, overdue logic, accessibility, and edit functionality after establishing a working core.