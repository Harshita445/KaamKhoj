// Handle form submission
document.getElementById("workerForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  alert("✅ Registered successfully!");
});

document.getElementById("jobForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  alert("✅ Job posted successfully!");
});

// Search workers
async function search() {
  const skill = document.getElementById("searchSkill").value;
  const workers = [
    { name: "Ravi", skill: "Plumber", phone: "9876543210" },
    { name: "Sita", skill: "Cook", phone: "9123456789" },
  ];

  const resultDiv = document.getElementById("results");
  const matches = workers.filter(w => w.skill.toLowerCase().includes(skill.toLowerCase()));

  resultDiv.innerHTML = matches.length
    ? matches.map(w => `<p>${w.name} - ${w.skill} 📞 ${w.phone}</p>`).join('')
    : "No workers found.";
}

// Voice input using Web Speech API
function record() {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'hi-IN';
  recognition.onresult = (e) => {
    document.getElementById("skill").value = e.results[0][0].transcript;
  };
  recognition.start();
}
