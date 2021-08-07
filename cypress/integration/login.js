describe('Logintest', function(){
    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/login')
      })
      it('VerifyLoginForm',function()      //ForValidCredetials
      {
          cy.url().should('include','/login')
          cy.get('h2').contains('Login Page')
          cy.get('.subheader').contains('This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.')
          cy.contains('username').should('be.visible') 
          cy.get('#username').type('tomsmith',{force: true})
          cy.contains('Password').should('be.visible') 
          cy.get('#password').type('SuperSecretPassword!',{force: true})
          cy.get('.radius').contains('Login').click()
          .url().should('include','/secure')
          cy.get('#flash')
          cy.get('h2').contains('Secure Area').get('.subheader').contains('Welcome to the Secure Area. When you are done click logout below.')
          cy.get('.button').click().url().should('include','/login')
        })
        //ForInavalid Credentials
        
        it('VerifyLoginValidationError',function(){
            cy.get('#username').type('tomsmith',{force: true})
            cy.contains('Password').should('be.visible') 
            cy.get('#password').type('SuperSecretPasswordwdwq!',{force: true})
            cy.get('.radius').contains('Login').click()
            .url().should('include','/login')
    
        })

})

    