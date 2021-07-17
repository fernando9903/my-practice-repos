const ApifyClient = require('apify-client');

// Initialize the ApifyClient with API token
const client = new ApifyClient({
    token: '<YOUR_API_TOKEN>',
});

// Prepare actor input
const input = {};

(async () => {
    // Run the actor and wait for it to finish
    const run = await client.actor("puorc/mexico-covid19").call(input);

    // Fetch and print actor results from the run's dataset (if any)
    console.log('Results from dataset');
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    items.forEach((item) => {
        console.dir(item);
    });
})();