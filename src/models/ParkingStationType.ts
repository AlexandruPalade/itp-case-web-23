interface ParkingStationType {
  results: Array<{
    name: string;
    description: string;
    categorie: string;
    totalcapacity: number;
    occupation: number;
    location: {
      lon: number;
      lat: number;
    };
  }>;
}

export default ParkingStationType;
