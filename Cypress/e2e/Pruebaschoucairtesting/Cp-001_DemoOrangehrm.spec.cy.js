/*
*  # Caso de prueba: Ingresar a la página web iniciar sesión y realizar proceso de contratación completo de una vacante.
*
*   Titulo: Login Demo OrangeHRLive con credenciales correctas y contratación de personal
*   
*
*   ID Del caso: CP-001
*
*   Descripción del Caso de Prueba: Este caso de prueba valida el flujo completo de inicio de sesión y 
*   la realización de varias acciones dentro de la aplicación OrangeHRM utilizando credenciales correctas. 
*   El objetivo es asegurar que el usuario pueda iniciar sesión correctamente y realizar una serie de acciones
*  posteriores como agregar un nuevo empleado, programar una entrevista y finalizar la contratación.
*
*   Datos:
*   Usuario:Admin
*   Contraseña: admin123
*
*   Precondiciones:
*      - Tener el navegador abierto (Chrome)
*      - Tener la url https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
*      - El sistema OrangeHRM debe estar accesible y funcionando correctamente
*      - El usuario debe tener una cuenta válida con credenciales correctas: 
*         Usuario:Admin
*         Clave:admin123
*      - Tener datos de prueba para la vacante:
*         Datos de referencia del documento
*      - Entorno de pruebas debe estar preparado y listo para ejecutar scripts de Cypress.
*
*   Prioridad: Alta
*
*   Pasos del Caso de Prueba:
*    Navegar a la página de login.
*    URL: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
*    Ingresar las credenciales correctas y hacer login.
*    Acceder a la sección de Reclutamiento
*    Hacer clic en el botón "Add"
*    Ingresar los datos personales
*    Seleccionar el rol "Payroll Administrator"
*    Ingresar el correo y número de teléfono
*    Completar y guardar el formulario de nuevo empleado
*    Programar una entrevista
*    Completar el formulario de programación de entrevista (Nombre de la entrevista, entrevistador, fecha)
*    Guardar la programación de la entrevista
*    Marcar la entrevista como "Passed"
*    Ofertar el puesto
*    Completar y enviar la oferta de trabajo
*    Contratar al empleado
*    Completar el proceso de contratación y confirmar la contratación
*
*
*   Resultados esperados:
*   -Permite iniciar sesión correctamente, registrar al candidato, completar la vacante y confirmar contratación
*
* */

describe('Caso de prueba: Proceso de contratación completo en OrangeHRM', () => {
  it('Realizar Login', () => {
      // Paso 1: Navegar a la página de login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.wait(2000);

      // Paso 2: Ingresar usuario y contraseña
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[type="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
      cy.wait(2000);

      // Paso 3: Acceder a la sección de añadir empleado
      cy.get('nav ul li:nth-child(5) a span').click();
      cy.wait(2000);
      cy.contains('Add').click();
      cy.wait(2000);

      // Paso 4: Completar el formulario y guardar datos del nuevo empleado
      cy.get('input[name="firstName"]').type('Oscar');
      cy.get('input[name="middleName"]').type('Andres');
      cy.get('input[name="lastName"]').type('Roa');
      cy.get('.oxd-select-text-input').click();
      cy.wait(2000);
      cy.contains('Payroll Administrator').click();
      cy.wait(2000);
      cy.get('form').within(() => {
          cy.get('input').eq(3).type('oscarandres@gamil.com');
          cy.get('input').eq(4).type('453465464347');
      });
      cy.contains('Save').click();
      cy.wait(3000);

      // Paso 5: Programar entrevista
      cy.contains('Shortlist').click();
      cy.wait(2000);
      cy.get('button[type="submit"]').click();
      cy.wait(2000);
      cy.contains('Schedule Interview').click();
      cy.wait(2000);
      cy.get('form').within(() => {
          cy.get('input').eq(4).type('Entrevista QA');
          cy.get('input').eq(5).type('Ameli');
          cy.wait(2000);
          cy.contains('Amelia Brown').click();
          cy.get('input').eq(6).type('2024-29-10');
          cy.contains('Save').click();
          cy.wait(2000);

     // Marcar la entrevista como pasada
          cy.contains('Mark Interview Passed').click();
          cy.wait(2000);
          cy.get('button[type="submit"]').click();
          cy.wait(2000);

     //Completar el proceso de contratación
          cy.contains('Offer Job').click();
          cy.get('button[type="submit"]').click();
          cy.wait(2000);

     // Confirmar la contratación
          cy.contains('Hire').click();
          cy.get('button[type="submit"]').click();
          cy.wait(2000);
          
        });
      });
  });
