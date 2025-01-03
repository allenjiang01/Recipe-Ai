const { processImages } = require('./processImages');


describe('processIngredients', () => {
  const testUserInput = "Chicken and Broccoli Stir-Fry";
    it('should return a response from Google API', async () => {
      const result = await processImages(testUserInput);

      console.log(result);
      expect(result instanceof String);
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