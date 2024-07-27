"use client"

import { PieChart } from '@mui/x-charts/PieChart';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TotalPresent from '@/components/TotalPresent';
import RecentlyAdded from '@/components/RecentlyAdded';

const data = [
    { id: 0, value: 10, label: 'Boys', color: '#228B22' },
    { id: 1, value: 15, label: 'Girls', color: '#FF4191' },
];




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

export default function Admin() {


    return (



        <div className="dashboard">
            {/* ADMIN */}
            <h1 className='title'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
                Dashboard
            </h1>
            <div className="staff">
                <ul>
                    <TotalPresent title='Students' />
                    <TotalPresent title='Teachers' />
                </ul>
            </div>
            <div className="container">
                <ul>
                    <li className='chart'><h1>Total No. Of Students</h1>
                        <div className="content">
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
                        </div></li>
                    <li className='chat'> <h1>Messages</h1>
                        <div className="content">
                            <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg></button></div></li>
                </ul>

            </div>

            <div className="recentlyAdded">
                <h1>Recently Added</h1>
                <RecentlyAdded />
            </div>
            
        </div>


    )
}