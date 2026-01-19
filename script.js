const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");

// Load messages from localStorage
window.onload = () => {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.forEach(msg => addMessage(msg));
};

function sendMessage() {
    const message = messageInput.value.trim();
    if (message === "") return;

    addMessage(message);
    saveMessage(message);
    messageInput.value = "";
}

function addMessage(text) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message");
    msgDiv.innerText = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function saveMessage(text) {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(text);
    localStorage.setItem("messages", JSON.stringify(messages));
}
