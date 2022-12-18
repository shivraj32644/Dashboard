import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
import { riskRewardData } from "../../Data";
import styles from './Styles/RiskTable.module.css'
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

export const RiskTable = () => {
  const [order, setOrder] = useState(false);
  const [data, setData] = useState(riskRewardData);
  const [arrow, setArrow] = useState(<AiOutlineArrowUp />);

  // const desc = <AiOutlineArrowDown/>
  const ascendingColor = (value) => {
    let color = "";
    

    switch (true) {
      case value <= 1:
        color = "#069c7b";
        break;
      case value <= 2 && value > 1:
        color = "#0ac99f";
        break;
      case value <= 3 && value > 2:
        color = "#12ddb1";
        break;
      case value <= 4 && value > 3:
        color = "#24ecc1";
        break;
      case value <= 5 && value > 4:
        color = "#3ef8d0";
        break;
      case value <= 6 && value > 5:
        color = "#62f6d6";
        break;
      case value <= 7 && value > 6:
        color = "#edabb7";
        break;
      case value <= 8 && value > 7:
        color = "#f091a3";
        break;
      case value <= 9 && value > 8:
        color = "#ec7b8f";
        break;
      case value <= 10 && value > 9:
        color = "#eb637c";
        break;
      case value <= 11 && value > 10:
        color = "#f65270";
        break;
      case value > 11:
        color = "#f65270";
        break;
      
      default:
        break;
    }

    return color;
  };
  const descendingColor = (value) => {
    let color = "";

    switch (true) {
      case value <= 1:
        color = "#f65270";
        break;
      case value <= 2 && value > 1:
        color = "#eb637c";
        break;
      case value <= 3 && value > 2:
        color = "#ec7b8f";
        break;
      case value <= 4 && value > 3:
        color = "#f091a3";
        break;
      case value <= 5 && value > 4:
        color = "#edabb7";
        break;
      case value <= 6 && value > 5:
        color = "#62f6d6";
        break;
      case value <= 7 && value > 6:
        color = "#3ef8d0";
        break;
      case value <= 8 && value > 7:
        color = "#24ecc1";
        break;
      case value <= 9 && value > 8:
        color = "#12ddb1";
        break;
      case value <= 10 && value > 9:
        color = "#0ac99f";
        break;
      case value <= 11 && value > 10:
        color = "#069c7b";
        break;
      case value > 11:
        color = "#069c7b";
        break;
      
      default:
        break;
    }

    return color;
  };
  const handleClick = (value, order,arrow) => {
    
    setOrder(!order);
    order ? setArrow(<AiOutlineArrowDown />) : setArrow(<AiOutlineArrowUp />);
    const newData = data.sort((a, b) => {
      if (order) {
        if (a[value] > b[value]) {
          return 1;
        } else if (a[value] < b[value]) {
          return -1;
        }
      } else {
        if (a[value] > b[value]) {
          return -1;
        } else if (a[value] < b[value]) {
          return 1;
        }
      }
    });
    setData([...newData]);
    //   console.log(newData);
  };
  return (
    <div className={styles.container}>
      <table >
          <tr>
            <th>Liquid Fund – Direct Plan</th>
            <th onClick={() => handleClick("CreditRiskScore", order)}>
              Credit Risk Score
            </th>
            <th onClick={() => handleClick("StressSectorScore", order)}>
              Stressed Sector Score
            </th>
            <th onClick={() => handleClick("SensitiveIssuerScore", order)}>
              Sensitive Issuer Score
            </th>
            <th onClick={() => handleClick("InterestRateScore", order)}>
              Interest Rate Risk Score{" "}
            </th>
            <th onClick={() => handleClick("LiquidityScore", order)}>
              Liquidity Score
            </th>
            <th
              onClick={() =>
                handleClick("CompositeConcentrationRiskScore", order)
              }
            >
              Composite Concentration Risk Score
            </th>
            <th onClick={() => handleClick("StandardDeviationScore", order)}>
              Standard Deviation Score
            </th>
            <th onClick={() => handleClick("AssetClassExposureScore", order)}>
              Asset Class Exposure Score
            </th>
            <th onClick={() => handleClick("TotalRiskScore", order)}>
              Total Risk Score
            </th>
            <th onClick={() => handleClick("RankBasedOnRisk", order)}>
              Rank based on Risk
            </th>
            <th onClick={() => handleClick("YTM")}>YTM</th>
            <th onClick={() => handleClick("CompositePerformanceScore", order)}>
              Composite Performance Score
            </th>
            <th onClick={() => handleClick("ConsistencyScore", order)}>
              Consistency Score
            </th>
            <th onClick={() => handleClick("TotalReturnScore", order)}>
              Total Returns Score
            </th>
            <th onClick={() => handleClick("RankBasedOnReturns", order)}>
              Rank based on Returns
            </th>
            <th onClick={() => handleClick("OverallScore", order)}>
              Overall Score
            </th>
            <th onClick={() => handleClick("OverallRanking", order)}>
              Overall Ranking
            </th>
          </tr>
          {data.map((e) => (
            <tr>
              <td>{e.fundName}</td>
              <td style={{ background: descendingColor(e.CreditRiskScore) }}>
                {" "}
                {e.CreditRiskScore}
              </td>
              <td style={{ background: descendingColor(e.StressSectorScore) }}>
                {e.StressSectorScore}
              </td>
              <td
                style={{ background: descendingColor(e.SensitiveIssuerScore) }}
              >
                {e.SensitiveIssuerScore}
              </td>
              <td style={{ background: descendingColor(e.InterestRateScore) }}>
                {e.InterestRateScore}
              </td>
              <td style={{ background: descendingColor(e.LiquidityScore) }}>
                {e.LiquidityScore}
              </td>
              <td
                style={{
                  background: descendingColor(
                    e.CompositeConcentrationRiskScore
                  ),
                }}
              >
                {e.CompositeConcentrationRiskScore}
              </td>
              <td
                style={{
                  background: descendingColor(e.StandardDeviationScore),
                }}
              >
                {e.StandardDeviationScore}
              </td>
              <td
                style={{
                  background: descendingColor(e.AssetClassExposureScore),
                }}
              >
                {e.AssetClassExposureScore}
              </td>
              <td style={{ background: descendingColor(e.TotalRiskScore) }}>
                {e.TotalRiskScore}
              </td>

              <td style={{ background: ascendingColor(e.RankBasedOnRisk) }}>
                {e.RankBasedOnRisk}
              </td>

              <td style={{ background: descendingColor(e.StressSectorScore) }}>
                {e.YTM}
              </td>
              <td
                style={{
                  background: descendingColor(e.CompositePerformanceScore),
                }}
              >
                {e.CompositePerformanceScore}
              </td>
              <td style={{ background: descendingColor(e.ConsistencyScore) }}>
                {e.ConsistencyScore}
              </td>
              <td style={{ background: descendingColor(e.TotalReturnScore) }}>
                {e.TotalReturnScore}
              </td>
              <td style={{ background: descendingColor(e.RankBasedOnReturns) }}>
                {e.RankBasedOnReturns}
              </td>
              <td style={{ background: ascendingColor(e.OverallScore) }}>
                {e.OverallScore}
              </td>
              <td style={{ background: ascendingColor(e.OverallRanking) }}>
                {e.OverallRanking}
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};
