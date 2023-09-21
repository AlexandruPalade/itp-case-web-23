// __tests__/bikeStationConverter.test.ts
import convertApiResponseToBikeStationData from "../utils/manger";

describe("convertApiResponseToBikeStationData", () => {
  it("should convert API response to BikeStationType array", () => {
    const apiResponse = {
      results: [
        {
          name: "Station A",
          bikes_available: 10,
          bikes_in_use: 5
        },
        {
          name: "Station B",
          bikes_available: 5,
          bikes_in_use: 2
        }
      ]
    };

    const expectedOutput = [
      {
        name: "Station A",
        bikesAvailable: 10,
        bikesInUse: 5
      },
      {
        name: "Station B",
        bikesAvailable: 5,
        bikesInUse: 2
      }
    ];

    const convertedData = convertApiResponseToBikeStationData(apiResponse);

    expect(convertedData).toEqual(expectedOutput);
  });

  it("should handle empty API response", () => {
    const apiResponse = {
      results: []
    };

    const convertedData = convertApiResponseToBikeStationData(apiResponse);

    expect(convertedData).toEqual([]);
  });
});
