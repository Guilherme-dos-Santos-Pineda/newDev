// const connection = new signalR.HubConnectionBuilder()
//     .withUrl("https://localhost:7021/chatHub")
//     .build();

// let connectionStarted = false;

// // Função de enviar mensagem atualizada
// function sendMessage() {
//     if (!connectionStarted) {
//         alert("Por favor, aguarde a conexão...");
//         return;
//     }

//     const user = document.getElementById('userInput').value.trim();
//     const message = document.getElementById('messageInput').value.trim();

//     if (!user || !message) {
//         alert("Por favor, preencha nome e mensagem!");
//         return;
//     }

//     connection.invoke("SendMessage", user, message)
//         .then(() => {
//             document.getElementById('messageInput').value = '';
//             document.getElementById('messageInput').focus();
//         })
//         .catch(err => console.error(err));
// }

// // Enviar com Enter
// function handleEnter(e) {
//     if (e.key === 'Enter') {
//         sendMessage();
//     }
// }

// // Recebimento de mensagens com scroll automático
// connection.on("ReceiveMessage", (user, message) => {
//     const chat = document.getElementById('chat');
//     const msg = document.createElement('div');
//     msg.innerHTML = `<strong>${user}:</strong> ${message}`;
//     chat.appendChild(msg);
    
//     // Scroll automático
//     chat.scrollTop = chat.scrollHeight;
// });

// connection.start()
//     .then(() => {
//         console.log("Conectado no chat!");
//         connectionStarted = true;
//     })
//     .catch(err => console.error(err.toString()));