function sendMail(contactForm) {
    emailjs.send("service_s3qryhv", "template_0cej7l8", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_required": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}