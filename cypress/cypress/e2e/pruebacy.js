describe('aplicación', () => {
    const url = 'https://angular-6-registration-login-example.stackblitz.io/register';
 
    it('Debe cargar la página de registro', () => {
       // Visitar la URL
       cy.visit(url);
 
 
       cy.wait(2000);
       // Verificar que la página de registro se haya cargado
       cy.get('button').should('be.visible');
 
       // Tomar una captura de pantalla
       cy.screenshot('pagina-inicial');
 
       cy.get('button').click();
 
       cy.wait(3000);
       cy.get('input[formcontrolname="firstName"]').type('Monitor');
       cy.get('input[formcontrolname="lastName"]').type('Pruebas');
       cy.get('input[formcontrolname="username"]').type('pruebas');
       cy.get('input[formcontrolname="password"]').type('MISO4208');
 
       // Enviar el formulario
       cy.get('button.btn.btn-primary').click();
 
       // Verificar si aparece el mensaje de éxito
       cy.get('.alert-success').should('contain', 'Registration successful');
 
       // Tomar una captura de pantalla
       cy.screenshot('registro-exitoso');
 
       cy.wait(3000);
       cy.get('div.alert.alert-success').click();
 
       cy.get('input[formcontrolname="username"]').type('pruebas');
       cy.get('input[formcontrolname="password"]').type('MISO4208');
 
       cy.get('button.btn.btn-primary').click();
 
    });
 });