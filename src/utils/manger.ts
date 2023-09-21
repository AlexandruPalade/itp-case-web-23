import ApiBikeResponseType from "../models/ApiBikeResponseType";
import BikeStationType from "../models/BikeStationTypes";

function convertApiResponseToBikeStationData(
  apiResponse: ApiBikeResponseType
): BikeStationType[] {
  const convertedData = apiResponse.results.map(station => {
    return {
      name: station.name,
      bikesAvailable: station.bikes_available,
      bikesInUse: station.bikes_in_use
    };
  });

  return convertedData;
}

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

export default convertApiResponseToBikeStationData;
