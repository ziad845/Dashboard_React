

import { Box, useTheme } from '@mui/material';
import Bar from './bar';
import Header from "../../components/Header";



const BarChart = () => {
    const theme = useTheme()
    return (
        <Box>
        <Header
          Title="Bar Chart"
          subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
        />
        <Bar />
      </Box>
    );
}

export default BarChart