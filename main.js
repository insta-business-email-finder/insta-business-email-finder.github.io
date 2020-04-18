// Globals
let selectedPlan = null;
let username = null;

// Functions
const checkout = () => {
  username = document.getElementById("username").value;
  const stripeBtn = document.querySelector(
    `button[id^=checkout][data-plan=${selectedPlan}]`
  );
  stripeBtn.click();
};
const selectPlan = e => {
  selectedPlan = e.currentTarget.dataset.plan;
  setModalPlan(selectedPlan);
};
const setModalPlan = plan => {
  document.getElementById("modal-plan-name").innerText = plan;
};

// Adding event listeners
[...document.querySelectorAll("button[data-plan]")].forEach(item => {
  item.addEventListener("click", selectPlan);
});
