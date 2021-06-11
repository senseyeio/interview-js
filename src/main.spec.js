import { task1, task2, task3, task4, task5 } from './main';

describe('Task 1',  () => {
  it('should return the server objects from the provided URL', async () => {
    const servers = await task1();
    expect(servers.length).toBe(4);
    expect(servers?.[0].id).toBe(`w001`);
  });
});

describe('Task 2',  () => {
  it('should return servers that are up, sorted by uptime', async () => {
    const result = await task2();
    expect(result).toEqual([
        {
          id: 'db002',
          name: 'B-002',
          description: 'Secondary database server',
          isUp: true,
          uptime: 240,
          locationId: 'loc5'
        },
        {
          id: 'w001',
          name: 'Web-001',
          description: 'Main web server',
          isUp: true,
          uptime: 345600,
          locationId: 'loc1'
        },
        {
          id: 'w002',
          name: 'Web-002',
          description: 'Secondary web server',
          isUp: true,
          uptime: 604800,
          locationId: 'loc2'
        }
      ]
    );
  });
});

describe('Task 3', () => {
  it('should return a list of location country names with no duplicates, sorted alphabetically', async () => {
    const result = await task3();
    expect(result).toEqual([ 'Germany', 'Ireland', 'UK', 'US' ]);
  })
});

describe('Task 4', () => {
  it('should return basic info about each server, including the city in which it is located', async () => {
    const result = await task4();
    
    expect(result).toEqual([
      {
        "id": "w001",
        "name": "Web-001",
        "isUp": true,
        "locationName": "Main office",
        "city": "London"
      },
      {
        "id": "w002",
        "name": "Web-002",
        "isUp": true,
        "locationName": "Europe HQ",
        "city": "Hamburg"
      },
      {
        "id": "db001",
        "name": "DB-001",
        "isUp": false,
        "locationName": "Data center",
        "city": "Dublin"
      },
      {
        "id": "db002",
        "name": "B-002",
        "isUp": true,
        "locationName": "Distribution center",
        "city": "Bristol"
      }
    ]);
  })
});

describe('Task 5', () => {
  it('should include a status message explaining how long the server has been up', async () => {
    const result = await task5();
    
    expect(result).toEqual([
      {
        "id": "w001",
        "name": "Web-001",
        "statusMessage": "Up for 240 days"
      },
      {
        "id": "w002",
        "name": "Web-002",
        "statusMessage": "Up for 420 days"
      },
      {
        "id": "db001",
        "name": "DB-001",
        "statusMessage": "Server is down"
      },
      {
        "id": "db002",
        "name": "B-002",
        "statusMessage": "Up for < 1 day"
      }
    ]);
  })
});