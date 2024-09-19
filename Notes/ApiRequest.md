# Fetch

* `fetch()` is a global method that starts a process of fetching a resource from the network asynchronously.
* It is promised based, so use try catch or .then() or .catch().
```javascript
fetch(`api.example.com`);
//OR
fetch(`api.example.com`,{headers:{},params:{}});
// ONLY API is mandatory
```
* The fetch request only fails if unable to make HTTP request due to network error or bad/invalid api. It does not consider HTTP codes like 404,500,403 as errors.
* It executes try or .then() even if server response with error codes so the handler must check the `response.ok` or `response.status`, to check if the server send any error code