import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Box, useTheme } from '@mui/material';

const data = [
    {
        year: 2020,
        Spain: 900,
        France: 1400,
        Germany: 1700,
    },
    {
        year: 2021,
        Spain: 1000,
        France: 1500,
        Germany: 1800,
    },
    {
        year: 2022,
        Spain: 1100,
        France: 1600,
        Germany: 1900,
    },
    {
        year: 2023,
        Spain: 1200,
        France: 1700,
        Germany: 2000,
    },
    {
        year: 2024,
        Spain: 1260,
        France: 1709,
        Germany: 2080,
    },
];

const Bar = ({ isDashboard = false }) => {
    const theme = useTheme();

    return (
        <Box sx={{ height: isDashboard ? '300px' : '75vh' }}>
            <ResponsiveBar
                data={data}
                keys={['Spain', 'France', 'Germany']}
                indexBy="year"
                theme={{
                    text: {
                        fontSize: 11,
                        fill: theme.palette.text.primary,
                    },
                    axis: {
                        domain: {
                            line: {
                                stroke: theme.palette.divider,
                                strokeWidth: 1,
                            },
                        },
                        legend: {
                            text: {
                                fontSize: 12,
                                fill: theme.palette.text.primary,
                            },
                        },
                        ticks: {
                            line: {
                                stroke: '#777777',
                                strokeWidth: 1,
                            },
                            text: {
                                fontSize: 11,
                                fill: theme.palette.text.primary,
                            },
                        },
                    },
                    grid: {
                        line: {
                            stroke: theme.palette.divider,
                            strokeWidth: 1,
                        },
                    },
                    legends: {
                        text: {
                            fontSize: 11,
                            fill: theme.palette.text.primary,
                        },
                    },
                }}
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'paired' }}
                borderColor={{
                    from: 'color',
                    modifiers: [['darker', 1.6]],
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: isDashboard ? null : 'Year',
                    legendPosition: 'middle',
                    legendOffset: 35,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: isDashboard ? null : 'Salary/Month',
                    legendPosition: 'middle',
                    legendOffset: -50,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [['darker', 1.6]],
                }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        translateX: 120,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={(e) => `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`}
            />
        </Box>
    );
};

export default Bar;
