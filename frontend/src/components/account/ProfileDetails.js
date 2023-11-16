import {Avatar, Box, Button, Paper, Typography} from "@mui/material";
import {Person} from "@mui/icons-material";
import {Link} from "react-router-dom";

const ProfileDetails = () => {
  return (
     <Box
         component={Paper}
         sx={{
         my: 4,
         mx: 1,
         px: 2,
         py: 4,
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
     }}>
         <Typography variant="h4">Customer data</Typography>
         <Avatar sx={{ m: 1, bgcolor: '#FF8834' , width: "100px", height: "100px"}} >
             <Person style={{
                 fontSize: 60
             }}/>
         </Avatar>
         <Typography variant="h5">Name Surname</Typography>
         <Box width="100%">
             <Typography variant="h6">Contact details</Typography>
             <Typography>Phone number: ...</Typography>
             <Typography>Email: ...</Typography>
             <Typography>Street: ...</Typography>
             <Typography>Zip and City</Typography>
             <Typography>Country</Typography>
         </Box>
         <Button component={Link} to="/profile/edit"
            sx={{
                color: '#FF8834',
                textDecoration: 'underline'
            }}
         >Edit your details</Button>
     </Box>
  );
}

export default ProfileDetails;