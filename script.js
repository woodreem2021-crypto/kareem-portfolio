function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    const userMessage = input.value.trim();

    if (userMessage === "") {
        return;
    }

    // Display user's message
    chatBox.innerHTML += "<p><strong>You:</strong> " + userMessage + "</p>";

    let botResponse = "Thanks for your message! Feel free to ask me about my skills, projects, or experience.";

    // Simple chatbot responses
    if (userMessage.toLowerCase().includes("hello") ||
        userMessage.toLowerCase().includes("hi")) {
        botResponse = "Hello! Welcome to my portfolio. How can I help you?";
    } 
    else if (userMessage.toLowerCase().includes("skills")) {
        botResponse = "My skills include technology, databases, cybersecurity, communication, and problem-solving.";
    } 
    else if (userMessage.toLowerCase().includes("projects")) {
        botResponse = "You can check out my projects and GitHub work in the Projects section of my portfolio.";
    } 
    else if (userMessage.toLowerCase().includes("resume")) {
        botResponse = "You can view my resume in the Resume section of my portfolio.";
    } 
    else if (userMessage.toLowerCase().includes("contact")) {
        botResponse = "You can use the Contact section to learn how to get in touch with me.";
    }

    // Display chatbot response
    chatBox.innerHTML += "<p><strong>Bot:</strong> " + botResponse + "</p>";

    // Clear input
    input.value = "";

    // Scroll to latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}
