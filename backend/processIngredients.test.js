const { processIngredients } = require('./processIngredients');


describe('processIngredients', () => {

  const testUserInput = "Chicken breast, broccoli";
    it('should return a response from OpenAI API', async () => {
      const result = await processIngredients(testUserInput);
      
      expect(result).toHaveProperty('choices'); 
      expect(result.choices[0].message.content).toBeDefined(); 
      console.log(result.choices[0].message.content)
    });
  
//     it('should handle errors gracefully', async () => {
//       // Mock an error scenario, e.g., invalid API key
//       jest.spyOn(global, 'fetch').mockImplementation(() =>
//         Promise.reject(new Error('Failed to fetch'))
//       );
  
//       const result = await processIngredients();
//       expect(result.error).toEqual('Failed to process ingredients');
//     });
  });