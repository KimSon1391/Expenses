import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPoinsValue = props.dataPoins.map((dataPoin) => dataPoin.value);
  const totalMax = Math.max(...dataPoinsValue);

  return (
    <div className="chart">
      {props.dataPoins.map((dataPoin) => {
        return (
          <ChartBar
            value={dataPoin.value}
            max={totalMax}
            label={dataPoin.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
