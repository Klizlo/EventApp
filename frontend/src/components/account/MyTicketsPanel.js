import {Box, Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const MyTicketsPanel = () => {
  return (
      <Box sx={{
          my: 4,
          mx: 1,
          px: 2,
          py: 4,
          display: 'flex',
          flexDirection: 'column'
      }}>
          <Typography variant="h5" color="#FF8834" fontWeight="bold" mb="2%">MY TICKETS</Typography>
          <Button component={Link} to=""
                  sx={{
                      color: 'black',
                      border: 'black solid',
                      height: '80px',
                      my: '2%'
                  }}
            >tickets for current events</Button>
          <Button component={Link} to=""
                  sx={{
                      color: 'black',
                      border: 'black solid',
                      height: '80px',
                      my: '2%'
                  }}
            >transaction history</Button>
      </Box>
  );
}

export default MyTicketsPanel;