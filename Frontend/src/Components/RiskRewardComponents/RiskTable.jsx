import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useMediaQuery,
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
  const [isLargerThan1280] = useMediaQuery('(min-width: 1320px)')
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
  const handleClick = (value, order,e,text) => {
    console.log(e.target.className)
    e.target.className = e.target.className === "active" ? "default" : "active"
    e.target.innerHTML = e.target.className === "active" ? text+" ▲" : text+" ▼"
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
    <div    className={styles.container}>
      <table style={isLargerThan1280 ? {} : {marginLeft:"50px"}} >
          <tr>
            <th className={styles.active} >Liquid Fund – Direct Plan</th>
            <th className="active" onClick={(event) => handleClick("CreditRiskScore", order,event,"Credit Risk Score")}>
              Credit Risk Score
            </th>
            <th className="active" onClick={(event) => handleClick("StressSectorScore", order,event,"Stressed Sector Score")}>
              Stressed Sector Score
            </th>
            <th className={styles.active} onClick={(event) => handleClick("SensitiveIssuerScore", order,event,"Sensitive Issuer Score")}>
              Sensitive Issuer Score
            </th>
            <th className={styles.active} onClick={(event) => handleClick("InterestRateScore", order,event,"Interest Rate Risk Score")}>
              Interest Rate Risk Score{" "}
            </th>
            <th className={styles.active} onClick={(event) => handleClick("LiquidityScore", order,event,"Liquidity Score")}>
              Liquidity Score
            </th>
            <th className={styles.active}
              onClick={(event) =>
                handleClick("CompositeConcentrationRiskScore", order,event,"Composite Concentration Risk Score")
              }
            >
              Composite Concentration Risk Score
            </th>
            <th className={styles.active} onClick={(event) => handleClick("StandardDeviationScore", order,event,"Standard Deviation Score")}>
              Standard Deviation Score
            </th>
            <th className={styles.active} onClick={(event) => handleClick("AssetClassExposureScore", order,event,"Asset Class Exposure Score")}>
              Asset Class Exposure Score
            </th>
            <th className={styles.active} onClick={(event) => handleClick("TotalRiskScore", order,event,"Total Risk Score")}>
              Total Risk Score
            </th>
            <th className={styles.active} onClick={(event) => handleClick("RankBasedOnRisk", order,event,"Rank based on Risk")}>
              Rank based on Risk
            </th>
            <th className={styles.active} onClick={(event) => handleClick("YTM")}>YTM</th>
            <th className={styles.active} onClick={(event) => handleClick("CompositePerformanceScore", order,event,"Composite Performance Score")}>
              Composite Performance Score
            </th>
            <th className={styles.active} onClick={(event) => handleClick("ConsistencyScore", order,event,"Consistency Score")}>
              Consistency Score
            </th>
            <th className={styles.active} onClick={(event) => handleClick("TotalReturnScore", order,event,"Total Returns Score")}>
              Total Returns Score
            </th>
            <th className={styles.active} onClick={(event) => handleClick("RankBasedOnReturns", order,event,"Rank based on Returns")}>
              Rank based on Returns
            </th>
            <th className={styles.active} onClick={(event) => handleClick("OverallScore", order,event,"Overall Score")}>
              Overall Score
            </th>
            <th className={styles.active} onClick={(event) => handleClick("OverallRanking", order,event,"Overall Ranking")}>
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
