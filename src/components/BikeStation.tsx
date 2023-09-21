import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  bikeStationGhentDampoortApiLink,
  bikeStationGhentSintPieters
} from "../api_links";

import ApiBikeResponseType from "../models/ApiBikeResponseType";
import BikeStationType from "../models/BikeStationTypes";
import convertApiResponseToBikeStationData, {
  copyToClipboard
} from "../utils/manger";

const BikeStation: React.FC = () => {
  let [stationDataGhentDampoort, setStationDataGhentDampoort] = useState<
    BikeStationType[] | null
  >(null);

  let [stationDataSintPieters, setStationDataSintPieters] = useState<
    BikeStationType[] | null
  >(null);

  useEffect(() => {
    fetchDataBikeStationGhentDampoort();
    fetchDataBikeStationGhentSintPieters();
    document.body.style.margin = "0";
  }, []);

  const fetchDataBikeStationGhentDampoort = async () => {
    try {
      const response = await fetch(bikeStationGhentDampoortApiLink);
      const data: ApiBikeResponseType = await response.json();

      const convertedData = convertApiResponseToBikeStationData(data);
      const stationDetails = convertedData;

      setStationDataGhentDampoort(stationDetails);
    } catch (error) {
      console.error("No data found", error);
    }
  };

  const fetchDataBikeStationGhentSintPieters = async () => {
    try {
      const response = await fetch(bikeStationGhentSintPieters);
      const data: ApiBikeResponseType = await response.json();

      const convertedData = convertApiResponseToBikeStationData(data);
      const stationDetails = convertedData;

      setStationDataSintPieters(stationDetails);
    } catch (error) {
      console.error("No data found", error);
    }
  };

  return (
    <BikesWrapper>
      {stationDataGhentDampoort?.map((station, index) => (
        <BikeDetails key={index} stationData={station} />
      ))}
      {stationDataSintPieters?.map((station, index) => (
        <BikeDetails key={index} stationData={station} />
      ))}
      <Link to="/parkings">Go to Parkings</Link>
    </BikesWrapper>
  );
};

const BikeDetails: React.FC<{
  stationData: {
    name: string;
    bikesAvailable: number;
    bikesInUse: number;
  } | null;
}> = ({ stationData }) => {
  return (
    stationData && (
      <MainContainer>
        <TopContainer>
          {stationData.name === "Station Gent-Dampoort" ? (
            <ImageOverlay src={require("../assets/dampoort.png")} />
          ) : (
            <ImageOverlay src={require("../assets/sint-pieters.png")} />
          )}
        </TopContainer>
        <BottomContainer>
          <div>
            <HeadingOverlay>{stationData.name}</HeadingOverlay>
            <p>Bikes Available: {stationData.bikesAvailable}</p>
            <p>
              Total bike: {stationData.bikesInUse + stationData.bikesAvailable}
            </p>
          </div>

          <CopyButton onClick={() => copyToClipboard(stationData.name)}>
            <img src={require("../assets/copy.png")} />
          </CopyButton>
        </BottomContainer>
      </MainContainer>
    )
  );
};

const BikesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: #ececec;
  font-family: "Courier New", Courier, monospace;
  gap: 20px;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  height: 450px;
  border-radius: 10px;
`;

const TopContainer = styled.div`
  display: flex;
  width: inherit;
  flex-direction: column;
`;

const ImageOverlay = styled.img`
  width: 300px;
  height: 200px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const HeadingOverlay = styled.h4`
  color: inherit;
  text-align: center;
`;

const BottomContainer = styled.div`
  flex: 1;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 100%;
`;

const CopyButton = styled.button`
  align-self: flex-end;
  background-color: inherit;
  border-radius: 10px;
  border: 0;
`;
export default BikeStation;
