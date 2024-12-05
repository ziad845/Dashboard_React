import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { Box, useTheme } from '@mui/material'
const data =[
 
    {
      "id": "france",
      "color": "hsl(12, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 112
        },
        {
          "x": "helicopter",
          "y": 203
        },
        {
          "x": "boat",
          "y": 111
        },
        {
          "x": "train",
          "y": 122
        },
        {
          "x": "subway",
          "y": 69
        },
        {
          "x": "bus",
          "y": 145
        },
        {
          "x": "car",
          "y": 245
        },
        {
          "x": "moto",
          "y": 217
        },
        {
          "x": "bicycle",
          "y": 85
        },
        {
          "x": "horse",
          "y": 273
        },
        {
          "x": "skateboard",
          "y": 110
        },
        {
          "x": "others",
          "y": 181
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(55, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 130
        },
        {
          "x": "helicopter",
          "y": 122
        },
        {
          "x": "boat",
          "y": 8
        },
        {
          "x": "train",
          "y": 283
        },
        {
          "x": "subway",
          "y": 18
        },
        {
          "x": "bus",
          "y": 140
        },
        {
          "x": "car",
          "y": 50
        },
        {
          "x": "moto",
          "y": 66
        },
        {
          "x": "bicycle",
          "y": 94
        },
        {
          "x": "horse",
          "y": 55
        },
        {
          "x": "skateboard",
          "y": 89
        },
        {
          "x": "others",
          "y": 247
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(211, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 36
        },
        {
          "x": "helicopter",
          "y": 207
        },
        {
          "x": "boat",
          "y": 74
        },
        {
          "x": "train",
          "y": 154
        },
        {
          "x": "subway",
          "y": 60
        },
        {
          "x": "bus",
          "y": 284
        },
        {
          "x": "car",
          "y": 229
        },
        {
          "x": "moto",
          "y": 119
        },
        {
          "x": "bicycle",
          "y": 294
        },
        {
          "x": "horse",
          "y": 269
        },
        {
          "x": "skateboard",
          "y": 105
        },
        {
          "x": "others",
          "y": 21
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(121, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 291
        },
        {
          "x": "helicopter",
          "y": 148
        },
        {
          "x": "boat",
          "y": 242
        },
        {
          "x": "train",
          "y": 268
        },
        {
          "x": "subway",
          "y": 170
        },
        {
          "x": "bus",
          "y": 229
        },
        {
          "x": "car",
          "y": 201
        },
        {
          "x": "moto",
          "y": 17
        },
        {
          "x": "bicycle",
          "y": 181
        },
        {
          "x": "horse",
          "y": 240
        },
        {
          "x": "skateboard",
          "y": 175
        },
        {
          "x": "others",
          "y": 282
        }
      ]
    }
  ]

const Line = (isDashboard=false) => {
    const theme = useTheme()
  return (
    <Box sx={{height: isDashboard? "280px" : "75vh"}}> <ResponsiveLine
    data={data}
       curve="catmullRom"
    theme={{

      "text": {
        "fontSize": 11,
        "fill": theme.palette.text.primary,
        "outlineWidth": 0,
        "outlineColor": "transparent"
      },
      "axis": {
        "domain": {
          "line": {
            "stroke": theme.palette.divider,
            "strokeWidth": 1
          }
        },
        "legend": {
          "text": {
            "fontSize": 12,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
          }
        },
        "ticks": {
          "line": {
            "stroke": "#777777",
            "strokeWidth": 1
          },
          "text": {
            "fontSize": 11,
            "fill": theme.palette.text.secondary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
          }
        }
      },
      "grid": {
        "line": {
          "stroke": theme.palette.divider,
          "strokeWidth": 0
        }
      },
      "legends": {
        "title": {
          "text": {
            "fontSize": 11,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
          }
        },
        "text": {
          "fontSize": 11,
          "fill": theme.palette.text.primary,
          "outlineWidth": 0,
          "outlineColor": "transparent"
        },
        "ticks": {
          "line": {},
          "text": {
            "fontSize": 10,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
          }
        }
      },
      "annotations": {
        "text": {
          "fontSize": 13,
          "fill": theme.palette.text.primary,
          "outlineWidth": 2,
          "outlineColor": "#ffffff",
          "outlineOpacity": 1
        },
        "link": {
          "stroke": "#000000",
          "strokeWidth": 1,
          "outlineWidth": 2,
          "outlineColor": "#ffffff",
          "outlineOpacity": 1
        },
        "outline": {
          "stroke": "#000000",
          "strokeWidth": 2,
          "outlineWidth": 2,
          "outlineColor": "#ffffff",
          "outlineOpacity": 1
        },
        "symbol": {
          "fill": "#000000",
          "outlineWidth": 2,
          "outlineColor": "#ffffff",
          "outlineOpacity": 1
        }
      },
      "tooltip": {
        "wrapper": {},
        "container": {
          "background": theme.palette.background.default,
          "color": theme.palette.text.primary,
          "fontSize": 12
        },
        "basic": {},
        "chip": {},
        "table": {},
        "tableCell": {},
        "tableCellValue": {}
      }
    }}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? null :  'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
        truncateTickAt: 0
    }}
    axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? null : 'Count',
        legendOffset: -44,
        legendPosition: 'middle',
        truncateTickAt: 0
    }}
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabel="data.yFormatted"
    pointLabelYOffset={-12}
    enableTouchCrosshair={true}
    useMesh={true}
    legends={[
        {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemBackground: 'rgba(0, 0, 0, .03)',
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]}
/>
</Box>
  )
}

export default Line