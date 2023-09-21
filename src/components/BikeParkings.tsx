import React, { useEffect, useState } from "react";
import { parkingsApiLink } from "../utils/api_links";
import ParkingStationType from "../models/ParkingStationType";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BikeParkings: React.FC = () => {
  let [parkingsData, setParkings] = useState<Array<{
    name: string;
    description: string;
    categorie: string;
    totalcapacity: number;
    occupation: number;
    location: { lon: number; lat: number };
  }> | null>(null);

  useEffect(() => {
    fetchDataParkings();
    document.body.style.margin = "0";
    document.body.style.background = " #ececec";
  }, []);

  const navigate = useNavigate();

  const navigateToParkingDetails = (index: number) => {
    const selectedParking = parkingsData && parkingsData[index];

    if (selectedParking) {
      navigate(`/parkingDetails/${selectedParking.name}`, {
        state: { parkingData: selectedParking }
      });
    }
  };

  const fetchDataParkings = async () => {
    try {
      const response = await fetch(parkingsApiLink);
      const parkingsApiData: ParkingStationType = await response.json();
      const parkings = parkingsApiData.results;

      setParkings(parkings);
    } catch (error) {
      console.error("No data found", error);
    }
  };
  return (
    <ParkingsWrapper>
      <div>
        {parkingsData && <h1>Available Parkings</h1>}
        <table>
          <thead>
            <tr>
              <th>Parking Name</th>
            </tr>
          </thead>
          <tbody>
            {parkingsData?.map((parking, index) => (
              <tr key={index}>
                <td onClick={() => navigateToParkingDetails(index)}>
                  {parking.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ParkingsWrapper>
  );
};

const ParkingsWrapper = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  h1 {
    margin-top: 3rem;
    text-align: center;
  }
  table {
    border-collapse: collapse;
    margin: auto;
    width: 100%;
  }

  th {
    background-color: black;
    color: white;
    padding: 8px;
  }

  td {
    border: 1px solid black;
    text-align: center;
  }
`;

export default BikeParkings;
