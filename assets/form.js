
function sendEmail() {
    let name = $("#first-name").val() + " " + $("#last-name").val();
    let email = $("#emailaddress").val();
    let phone = $("#phonenumber").val();
    let message = $("#message").val();

    window.open(`mailto:info@naturalelectric.ca?subject=Business Inquiry&body=Name: ${name}%0D%0A%0D%0AEmail: ${email}\%0D%0A%0D%0APhone Number: ${phone}%0D%0A%0D%0AMessage: ${message}`);
}