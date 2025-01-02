```javascript
// Correct approach to handling cursor with async/await
async function getResultsCorrectly() {
  const cursor = db.collection('users').find(query);
  const results = [];
  await cursor.forEach(doc => results.push(doc));
  return results;
}
```