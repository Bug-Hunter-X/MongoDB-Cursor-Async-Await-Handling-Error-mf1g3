# MongoDB Cursor Async/Await Handling

This repository demonstrates a common error when using async/await with MongoDB cursors. The incorrect usage can lead to performance issues and unexpected results.

## Problem
The `toArray()` method on a MongoDB cursor is not designed for direct use with `await`.  Attempting to `await cursor.toArray()` can lead to errors or incorrect data retrieval.

## Solution
The correct approach involves iterating through the cursor using `forEach` within an `async` function to correctly handle the asynchronous nature of the cursor.