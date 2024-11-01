function showHome() {
    document.getElementById('homeSection').style.display = 'block';
    document.getElementById('formSection').style.display = 'none';
}

function showForm() {
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('formSection').style.display = 'block';
}

document.getElementById('groceryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const items = document.getElementById('items').value;
    const quantity = document.getElementById('quantity').value;
    const store = document.getElementById('store').value;

    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `
        <strong>Thank you, ${name}!</strong><br>
        You've ordered ${quantity} of the following items: <strong>${items}</strong>.<br>
        Preferred store: <strong>${store}</strong>.<br>
        We will contact you at <strong>${email}</strong> to confirm your order.
    `;
    
    const createMessage = document.getElementById('createMessage');
    createMessage.style.display = 'block';

    this.reset();
});

document.querySelector('.close').onclick = function() {
    const createMessage = document.getElementById('createMessage');
    createMessage.style.display = 'none';
}

window.onclick = function(event) {
    const createMessage = document.getElementById('createMessage');
    if (event.target == createMessage) {
        createMessage.style.display = 'none';
    }
}
