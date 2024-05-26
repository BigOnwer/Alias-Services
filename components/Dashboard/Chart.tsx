import Chart from "react-google-charts";

interface PropsChart {
    value: number
}

export function PieChart({value}: PropsChart) {
    const data = [
        ['Total', 'Value'],
        ['Remuneration', 8],
        ['Value', value],
    ];

    const options = {
        title: '',
        is3D: false,
        slices: [
            { color: '#000000' },
            { color: '#ffffff', offset: 0.06 }, // Adiciona um pequeno deslocamento para mostrar a borda
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
        pieSliceText: 'percentage', // Exibe a porcentagem na fatia
        pieSliceTextStyle: {
            color: '#000000', // Define a cor do texto da porcentagem para preto
        },
        pieSliceBorderColor: '#000000', // Define a cor da borda da fatia
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
