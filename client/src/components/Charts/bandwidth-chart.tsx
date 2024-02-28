import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Col, Row } from 'antd';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BandwidthChart() {
  const data = {
    labels: ['Boosted', 'Normal', 'Low consumption'],
    datasets: [
      {
        label: "# of hours",
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return <Row gutter={[6, 6]}>
    <Col span={24}>
      <h3>Today's network slices usage (per hour)</h3>
    </Col>
    <Col span={24} style={{ height: '30em', width: '30em' }}>
      <Doughnut   width={"60%"}
  options={{ maintainAspectRatio: false }} data={data} />
    </Col>
  </Row>;
}