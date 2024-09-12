document.getElementById('verificationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Show the certificate details table
    document.getElementById('certificateDetails').classList.remove('hidden');
});
