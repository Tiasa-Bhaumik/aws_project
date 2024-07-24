// Update for displaying thank you message

document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const consent = document.getElementById('consent').checked;

    if (consent) {
        // Simulate a successful subscription
        setTimeout(() => {
            const mainContainer = document.getElementById('mainContainer');
            mainContainer.innerHTML = `
                <div class="thank-you-box">
                    <div class="thank-you-icon">✓</div>
                    <h1>Thanks for subscribing!</h1>
                    <p>A confirmation email has been sent to ${email}.</p>
                    <p>Please open it and click the button inside to confirm your subscription.</p>
                    <button class="dismiss-button" onclick="dismissMessage()">Dismiss</button>
                </div>`;
        }, 1000);
    } else {
        alert('You must agree to the terms to subscribe.');
    }
});

function dismissMessage() {
    const mainContainer = document.getElementById('mainContainer');
    mainContainer.innerHTML = `
        <div class="header">
            <h1>Stay Updated with Our Newsletter</h1>
            <p>Subscribe to receive the latest news, special offers, and updates directly to your inbox.</p>
        </div>
        
        <div class="benefits">
            <h2>Why Subscribe?</h2>
            <ul>
                <li>Exclusive Content: Get access to content not available on our website.</li>
                <li>Special Offers: Be the first to know about our special discounts and promotions.</li>
                <li>Latest News: Stay informed about the latest trends and updates in the industry.</li>
            </ul>
        </div>
        
        <div class="form-container" id="formContainer">
            <form id="subscriptionForm">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
        
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
        
                <div class="consent">
                    <input type="checkbox" id="consent" name="consent" required>
                    <label for="consent">I agree to receive emails and understand that I can unsubscribe at any time.</label>
                </div>
        
                <button type="submit">Subscribe</button>
            </form>
        </div>`;
    document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const consent = document.getElementById('consent').checked;

        if (consent) {
            // Simulate a successful subscription
            setTimeout(() => {
                const mainContainer = document.getElementById('mainContainer');
                mainContainer.innerHTML = `
                    <div class="thank-you-box">
                        <div class="thank-you-icon">✓</div>
                        <h1>Thanks for subscribing!</h1>
                        <p>A confirmation email has been sent to ${email}.</p>
                        <p>Please open it and click the button inside to confirm your subscription.</p>
                        <button class="dismiss-button" onclick="dismissMessage()">Dismiss</button>
                    </div>`;
            }, 1000);
        } else {
            alert('You must agree to the terms to subscribe.');
        }
    });
}
