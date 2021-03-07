(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_MJ5bM9NclB2Th9Sld9VC2');
})();

window.onload = function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // // generate a five digit number for the contact_number variable
        // this.contact_number.value = Math.random() * 100000 | 0;
        // // these IDs from the previous steps
        // emailjs.sendForm('contact_service', 'form', this)
        //     .then(function() {
        //         console.log('SUCCESS!');
        //     }, function(error) {
        //         console.log('FAILED...', error);
        //     });
    });
}