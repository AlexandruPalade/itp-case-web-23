interface ApiBikeResponseType {
  results: {
    name: string;
    bikes_in_use: number;
    bikes_available: number;
  }[];
}

export default ApiBikeResponseType;
