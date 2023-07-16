

describe('Pruebas en <DemoComponent/>', () => {
    
    test('Esta es un prueba que no falla', () =>{
        // Arrange
        const message = 'Hola Mundo';

        // Act
        const message2 = message.trim();

        // Assert
        expect(message2).toBe(message);
    })
  
})

