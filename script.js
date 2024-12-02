function showProposal() {
    const proposalDiv = document.getElementById('proposal');
    proposalDiv.classList.remove('hidden');
}

function response(answer) {
    const reply = document.getElementById('reply');
    reply.classList.remove('hidden');

    if (answer === 'Yes') {
        reply.innerHTML = "💕 Yay! You just made my day! I can't wait to start this amazing journey with you. 💕";
    } else {
        reply.innerHTML = "😔 It's okay, I respect your feelings. You'll always be special to me.";
    }
}
