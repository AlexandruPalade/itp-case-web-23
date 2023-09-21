import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const ParkingDetailsComponent = () => {
  const location = useLocation();
  const parkingData = location.state?.parkingData;

  useEffect(() => {
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.height = "100vh";
    document.body.style.margin = "0";
    document.body.style.background = "white";
  }, []);

  if (!parkingData) {
    return <div>No data available</div>;
  }

  const navigateToGoogleMaps = (lat: number, lon: number) => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`
    );
  };
  console.log(parkingData);
  return (
    <MainContainer>
      <TopContainer>
        <h1>{parkingData.name}</h1>
      </TopContainer>
      <BottomContainer>
        <p>Description: {parkingData.description}</p>
        <p>Category: {parkingData.categorie}</p>
        <p>Available spots: {parkingData.totalcapacity}</p>
        <p>Taken Spots: {parkingData.occupation}%</p>
        <GoogleNavigateButton
          onClick={() =>
            navigateToGoogleMaps(
              parkingData.location.lat,
              parkingData.location.lon
            )
          }
        >
          <img src={require("../assets/map.png")} />
        </GoogleNavigateButton>
      </BottomContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  background: #e7fbf3;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  font-size: 25px;
  margin-top: 100px;
`;

const TopContainer = styled.div`
  text-align: center;
  border-bottom: 1px solid black;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 5px;
    padding: 5px;
  }
`;

const GoogleNavigateButton = styled.button`
  align-self: flex-end;
  border: 0;
`;

export default ParkingDetailsComponent;
