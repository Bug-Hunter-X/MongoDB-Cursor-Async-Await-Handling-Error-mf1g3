```javascript
const query = { name: /John/i }; // Case-insensitive search

// This query will use a regular expression, which can be slower than other approaches
const cursor = db.collection('users').find(query);

// This is ok
cursor.toArray().then(results => {
  console.log(results);
});

// This is not good

// Incorrect use of async/await with cursor
async function getResults() {
  const cursor = db.collection('users').find(query);
  const results = await cursor.toArray(); // Incorrect, should use await cursor.forEach
  return results;
}

// Correct approach to handling cursor with async/await
async function getResultsCorrectly() {
  const cursor = db.collection('users').find(query);
  const results = [];
  await cursor.forEach(doc => results.push(doc));
  return results;
}
```