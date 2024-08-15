
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PieChart } from '@mui/x-charts/PieChart';
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    components: {
        MuiChart: {
            styleOverrides: {
                root: {
                    backgroundColor: '#2D4356', // Dark background color
                },
                text: {
                    fill: '#fff', // White color for labels

                },
            },
        },
    },
});


export default function Chart({data}) {
    return (
        <ThemeProvider theme={darkTheme}>
            <PieChart
                series={[
                    {
                        data,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        innerRadius: 40,
                        outerRadius: 100,
                        paddingAngle: 2,
                        cornerRadius: 5,
                        startAngle: -180,
                        endAngle: 180,
                    },
                ]}
                height={200}
            />
        </ThemeProvider>
    )
}