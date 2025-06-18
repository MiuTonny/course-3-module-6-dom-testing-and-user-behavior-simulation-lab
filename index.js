// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

function addElementToDOM(id, text) {
  const container = document.getElementById(id);
  if (container) {
    const p = document.createElement('p');
    p.textContent = text;
    container.appendChild(p);
  }
}

function removeElementFromDOM(id) {
  const el = document.getElementById(id);
  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
}

function simulateClick(id, text) {
  // simulate a button click by adding content
  addElementToDOM(id, text);
}

function handleFormSubmit(formId, outputId) {
  const form = document.getElementById(formId);
  const input = form.querySelector('input');
  const output = document.getElementById(outputId);
  const errorMessage = document.getElementById("error-message");

  const value = input.value.trim();

  if (value === "") {
    if (errorMessage) {
      errorMessage.textContent = "Input cannot be empty";
      errorMessage.classList.remove("hidden");
    }
    return;
  }

  if (errorMessage) {
    errorMessage.classList.add("hidden");
  }

  if (output) {
    output.textContent = value;
  }
}


module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};
