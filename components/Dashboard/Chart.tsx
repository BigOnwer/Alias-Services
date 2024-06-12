import Chart from "react-google-charts";

interface PropsChart {
    value: number
}

export function PieChart({ value }: PropsChart) {
    // Definimos o valor total do gráfico, que deve ser a soma das fatias
    const totalValue = 100;
    
    // Definimos um valor mínimo visível para as fatias
    const minimumVisibleValue = 1; 

    // Calculamos a proporção de value em relação ao totalValue
    let proportionValue = (value / totalValue) * 100;

    // Se o valor for muito baixo, ajustamos para o mínimo visível
    if (proportionValue < minimumVisibleValue) {
        proportionValue = minimumVisibleValue;
    }

    // Calculamos a fatia restante
    let remainingValue = totalValue - proportionValue;

    // Ajuste para garantir que a soma das fatias seja 100
    if (remainingValue < minimumVisibleValue) {
        remainingValue = minimumVisibleValue;
    }

    const data = [
        ['Total', 'Value'],
        ['Last', remainingValue],
        ['Now', proportionValue],
    ];

    const options = {
        title: '',
        is3D: false,
        slices: [
            { color: '#000000', borderColor: '#ffffff' }, // Parte preta com borda branca
            { color: '#ffffff', borderColor: '#000000', offset: 0.06 }, // Parte branca com borda preta
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
        backgroundColor: 'transparent' // Define o fundo como transparente
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
