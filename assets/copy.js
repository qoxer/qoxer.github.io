document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const address = button.getAttribute('data-crypto');
        navigator.clipboard.writeText(address).then(() => {
            alert('Address copied to clipboard!');
        }).catch(err => {
            console.error('Error copying: ', err);
        });
    });
});
