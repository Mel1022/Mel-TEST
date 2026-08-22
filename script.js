document.addEventListener("DOMContentLoaded", () => {
  const door = document.getElementById("garage-door");
  const toggleBtn = document.getElementById("toggle-door");
  const status = document.getElementById("door-status");

  const setDoorState = (open) => {
    door.classList.toggle("is-open", open);
    status.innerHTML = `Door status: <strong>${open ? "Open" : "Closed"}</strong>`;
    toggleBtn.textContent = open ? "Close the door" : "Open the door";
  };

  // Start closed, then run an opening demo shortly after load.
  setDoorState(false);
  setTimeout(() => setDoorState(true), 700);

  toggleBtn.addEventListener("click", () => {
    setDoorState(!door.classList.contains("is-open"));
  });

  const form = document.getElementById("quote-form");
  const note = document.getElementById("form-note");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    note.hidden = false;
    form.reset();
  });
});
