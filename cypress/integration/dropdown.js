describe("Dropdownfeature",function()
{
    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/dropdown')
      })
   
      it('VerifyUI',function()
    {
        cy.url().should('include','/dropdown')
        cy.get('h3').contains('Dropdown List')
        
                 
    })

    it('test and select First Dropdown options',function(){
        
 
        cy.get('#dropdown').then(function($select){
            $select.val('1')
            })
            cy.get('select').should('have.value', '1').contains('Option 1')  
                 
    })
    
    it('test and select second Dropdown options',function(){
 
        cy.get('#dropdown').then(function($select){
            $select.val('2')
            })
            cy.get('select').should('have.value', '2').contains('Option 2')  
                 
    })



})