import { Column } from '@ant-design/plots';

export default function BandwidthChart() {

  const data = [{
    "year": "1991",
    "value": 3,
    "type": "Lon"
  },
  {
    "year": "1992",
    "value": 5,
    "type": "Lon"
  },];

  const config = {
    data,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    label: {
      position: 'middle',
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
    },
  };

  return <Column style={{ innerHeight: '3em' }} {...config} />;
}