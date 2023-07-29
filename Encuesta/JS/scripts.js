function showMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
}

function showForm(action) {
    var formContainer = document.getElementById("formContainer");
    formContainer.classList.remove("hidden");

    var reportContainer = document.getElementById("reportContainer");
    reportContainer.classList.add("hidden");

    // Ocultar todos los formularios
    var forms = formContainer.getElementsByTagName("form");
    for (var i = 0; i < forms.length; i++) {
        forms[i].classList.add("hidden");
    }

    // Mostrar solo el formulario correspondiente a la acción seleccionada
    var formToShow = document.getElementById("form" + action);
    if (formToShow) {
        formToShow.classList.remove("hidden");
    }
}

function showReport() {
    var formContainer = document.getElementById("formContainer");
    formContainer.classList.add("hidden");

    var reportContainer = document.getElementById("reportContainer");
    reportContainer.classList.remove("hidden");
    
    var reportContent = document.getElementById("reportContent");
    reportContent.innerHTML = generateReport();
}

function generateReport() {
    var nombreCompleto = document.getElementById("nombreCompleto").value;
    var sexo = document.querySelector('input[name="sexo"]:checked').value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;

    var reportTable = '<table class="table">';
    reportTable += '<tr><th>Nombre Completo</th><td>' + nombreCompleto + '</td></tr>';
    reportTable += '<tr><th>Sexo</th><td>' + sexo + '</td></tr>';
    reportTable += '<tr><th>Fecha de Nacimiento</th><td>' + fechaNacimiento + '</td></tr>';

    reportTable += '</table>';

    return reportTable;
}