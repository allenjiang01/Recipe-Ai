const { processVideos } = require('./processVideos');


describe('processIngredients', () => {
    it('should return a response from YouTube API', async () => {
      const testRecipe = "Broccoli and Cheddar Quiche with Rice Crust";
      const result = await processVideos(testRecipe);
      
      console.log(result);
      expect(result[0].id.videoId).toBeDefined(); 
      expect(result[0].snippet.title).toBeDefined(); 
      console.log(result[0].snippet.title)
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