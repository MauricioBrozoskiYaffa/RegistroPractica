document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los datos ingresados en el formulario
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const country = document.getElementById("country").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    // Los datos del usuario
    const userData = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        country: country,
        password: password
    };

    // Guardar el Usuario
    const usersArray = [];
    usersArray.push(userData);

    // Limpiar el formulario
    document.getElementById("registrationForm").reset();

    console.log(usersArray);
});