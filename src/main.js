
// ----- TASK 1 -----
// - Fetch the list of servers from the following URL: https://raw.githubusercontent.com/senseyeio/interview-js/main/data/servers.json
// - You could use the `node-fetch` library (which is already installed) or any other library you are familiar with
// - Return the array of servers (from the `data` property in the returned JSON)

export async function task1() {
  throw new Error("TODO: Not yet implemented");
}


// ----- TASK 2 -----
// - Fetch the list of servers
// - Return an array of servers which are currently up, sorted by uptime (ascending)

export async function task2() {
  throw new Error("TODO: Not yet implemented");
}


// ----- TASK 3 -----
// - Fetch the list of locations from https://raw.githubusercontent.com/senseyeio/interview-js/main/data/locations.json
// - Return an array of unique country names from the locations (sorted alphabetically)

export async function task3() {
  throw new Error("TODO: Not yet implemented");
}


// ----- TASK 4 -----
// - Fetch all servers and locations
// - For each server, build a summary object combining the id, name and isUp properties of the server
//   with the name & city properties from the server's location.
//   
//   For example:
//   {
//     "id": "w001",                  // from server.id
//     "name": "Web-001",             // from server.name
//     "isUp": true,                  // from server.isUp
//     "locationName": "Main office", // from location.name
//     "city": "London"               // from location.city
//   }
// 
// - Return the array of summary objects (see test for full expected response)

export async function task4() {
  throw new Error("TODO: Not yet implemented");
}


// ----- TASK 5 -----
// - Fetch the list of servers
// - Return an array of objects, where each contains:
//    - the `id` and `name` of the server
//    - a `statusMessage` string (see below)
// The `statusMessage` should be derived as follows:
//    - If the server has been up for less than one day, show "Up for < 1 day"
//    - Otherwise, show "Up for n days", with n rounded down to an integer
//      (no need to worry about showing fractions or weeks/days/months etc)
//    - If the server is down, show "Server is down"

export async function task5() {
  throw new Error("TODO: Not yet implemented");
}
