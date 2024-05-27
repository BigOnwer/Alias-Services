import Chart from "react-google-charts";

interface PropsChart {
    value: number
}

export function PieChart({value}: PropsChart) {
    const data = [
        ['Total', 'Value'],
        ['Last', 10-value],
        ['Now', value],
    ];

    const options = {
        title: '',
        is3D: false,
        slices: [
            { color: '#000000' },
            { color: '#ffffff', offset: 0.06 },
        ],
        fontName: 'Arial',
        fontSize: 14,
        legend: {
            position: 'bottom',
            textStyle: {
                color: '#333',
                fontSize: 12
            }
        },
        pieSliceText: 'percentage',
        pieSliceTextStyle: {
            color: '#000000',
        },
        pieSliceBorderColor: '#000000',
    };

    return (
        <div>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </div>
    );
}
