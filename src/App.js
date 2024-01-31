import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import NavigationIcon from "@mui/icons-material/Navigation";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import {
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  IconButton,
  TextField,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";

const App = () => {
  return (
    <>
      <h1>Text Button</h1>
      <Button variant="text">Click me</Button>
      <Button color="secondary">secondary</Button>
      <Button color="primary" href="http://www.google.com">
        Link
      </Button>
      <Button disabled>Disabled</Button>
      <h1>contained Button</h1>
      <Button variant="contained" size="large">
        Click Me
      </Button>
      <Button variant="contained" color="secondary">
        Click Me
      </Button>
      <Button variant="contained" color="primary" href="http://www.google.com">
        Click Me
      </Button>
      <Button variant="contained" color="primary" disabled>
        Click Me
      </Button>
      <h1>outlined Button</h1>
      <Button variant="outlined">Click Me</Button>
      <Button variant="outlined" color="secondary">
        Click Me
      </Button>
      <Button variant="outlined" color="primary" href="http://www.google.com">
        Click Me
      </Button>
      <Button variant="outlined" color="primary" disabled>
        Click Me
      </Button>
      <h1>Button with icon</h1>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<DeleteIcon />} color="warning">
        Delete
      </Button>
      <h1>Button icons</h1>
      <IconButton color="secondary">
        <DeleteIcon />
      </IconButton>
      <h1>Custom Buttons</h1>
      <Button variant="contained" style={{ backgroundColor: "green" }}>
        custom1
      </Button>
      <Button variant="contained" sx={{ backgroundColor: "red" }}>
        custom2
      </Button>
      <h1>Button with Click Event</h1>
      <Button
        variant="contained"
        onClick={() => {
          alert("clicked");
        }}
      >
        Click Me
      </Button>
      <h1>Button group</h1>
      <ButtonGroup variant="contained" color="secondary">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <h1>Vertical Button group</h1>
      <ButtonGroup variant="contained" color="secondary" orientation="vertical">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <h1>Floating Action Button</h1>
      <Fab color="error">R</Fab>
      <Fab color="success">
        <AddIcon />
      </Fab>
      <Fab color="warning">
        <EditIcon />
      </Fab>
      <Fab color="info" variant="extended">
        <NavigationIcon />
        Navigate
      </Fab>
      <Fab color="primary">
        <FavoriteIcon />
      </Fab>
      <h1>CheckBox</h1>
      <Checkbox
        defaultChecked
        sx={{
          color: pink[800],
          "&.Mui-checked": {
            color: pink[600],
          },
        }}
      />
      <Checkbox checked={false} />
      <Checkbox indeterminate />
      <Checkbox
        icon={<FavoriteBorder />}
        checkedIcon={<FavoriteIcon />}
        sx={{ color: "red" }}
      />
      <Checkbox
        onChange={() => {
          console.log("checked done");
        }}
      />
      <FormControlLabel control={<checkBox />} label="India" />
      <FormControlLabel
        control={<checkBox />}
        label="Bottom"
        labelPlacement="bottom"
      />
      <h1>Radio Buttons</h1>
      <Radio value="male" name="radio-button" />
      <Radio value="female" name="radio-button" />
      <FormControlLabel
        control={<Radio />}
        label="Female"
        labelPlacement="top"
      />
      <FormControlLabel
        control={<Radio />}
        label="Female"
        labelPlacement="end"
      />
      <FormControlLabel
        control={<Radio />}
        label="Female"
        labelPlacement="bottom"
      />
      <FormControlLabel
        control={<Radio />}
        label="Female"
        labelPlacement="start"
      />
      <RadioGroup row>
        <FormControlLabel control={<Radio />} label="Male" value="male" />
        <FormControlLabel control={<Radio />} label="Female" value="female" />
        <FormControlLabel control={<Radio />} label="Other" value="other" />
      </RadioGroup>
      <h1>Rating</h1>
      <Rating />
      <br />
      <Rating value={3} readOnly />
      <Rating value={3} defaultValue={2.5} precision={0.5} />
      <h1>Slider</h1>
      <Slider value={5} />
      <Slider defaultValue={30} />
      <Box sx={{ height: "200px" }}>
        <Slider orientation="vertical" defaultValue={10} color="secondary" />
      </Box>
      <h1>switch</h1>
      <Switch />
      <Switch defaultChecked />
      <Switch disabled />
      <FormControlLabel control={<Switch />} label="dark" />
      <h1>Text</h1>
      <TextField label="Name" />
      <TextField label="standard" variant="standard" />
      <TextField label="outlined" variant="outlined" />
      <TextField label="filled" variant="filled" />
      <h1>Box</h1>
      <Box
        sx={{ width: "100px", height: "50px", backgroundColor: "lightblue" }}
      >
        Hello
      </Box>
      <h1>stack</h1>
      <Stack spacing={5} direction='row'>
        <Button variant="contained">Click me</Button>
        <Button variant="contained" color="secondary">secondary</Button>
        <Button variant="contained" color="primary" href="http://www.google.com">
          Link
        </Button>
        <Button disabled>Disabled</Button>
      </Stack>
      <h1>This are the System key/props</h1>
        <h1>Alignment</h1>
        <Box sx={{textAlign:'left'}}>Hello</Box>
        <Box sx={{textAlign:'centre'}}>Hello</Box>
        <Box sx={{textAlign:'right'}}>Hello</Box> 
        <h1>Font Weight</h1>
        <Box fontWeight='bold'>Hello300</Box>
        <Box fontWeight={500}>Hello500</Box> 
        <h1>font size</h1>
        <Box fontSize={24}>Hello</Box>
        <Box fontSize={34} >Hello</Box> 
        <h1>font style</h1>
        <Box fontStyl={24}>Hello</Box>
        <Box fontSize={34} >Hello</Box> 
        <Box fontStyle='italic' >Hello</Box> 
        <h1>color</h1>
        <Box bgcolor='primary.light'>color1</Box>
        <Box bgcolor='secondary.main'>color2</Box>
        <Box bgcolor='error.main'>color3</Box>
        <Box color='info.main'>color4</Box>
        <Box color='success.main'>color5</Box>

        <h1>margin</h1>
        <Box m={10}>All side margin</Box>
        <Box mt={10}>margin top</Box>
        <Box mb={10}>margin bottom</Box>
        <Box ml={10}>margin left</Box>
        <Box mr={10}>margin right</Box>
        <Box mx={10}>margin left right</Box>
        <Box my={10}>margin Top Bottom</Box>

        <h1>padding</h1>
        <Box p={10}>All side padding</Box>
        <Box pt={10}>padding top</Box>
        <Box pb={10}>padding bottom</Box>
        <Box pl={10}>padding left</Box>
        <Box pr={10}>padding right</Box>
        <Box px={10}>padding left right</Box>
        <Box py={10}>padding Top Bottom</Box>

        <h1>width sizing</h1>
        <Box width={1/4} bgcolor='red'>width 1/4</Box>
        <Box width={1} bgcolor='blue'>width 1</Box>
        <Box width='50%' bgcolor='orange'>width 50%</Box>
        <Box width={500} bgcolor='pink'>width 500px</Box>

        <h1>Height Sizing</h1>
        <Box height='50%' bgcolor='pink'>height 50%</Box>
        {/* <Box height={500} bgcolor='green'> */}
        <h1>Border</h1>
     <Stack spacing={5}>
     <Box border={1} >hello</Box>
        <Box borderTop={1} >hello</Box>
        <Box borderBottom={1} >hello</Box>
        <Box borderLeft={1} >hello</Box>
        <Box borderRight={1} >hello</Box>
     </Stack>

     <Stack spacing={5}>
     <Box border={0} >hello</Box>
        <Box border={1} borderTop={0} >hello</Box>
        <Box border={1} borderBottom={0} >hello</Box>
        <Box border={1} borderLeft={0} >hello</Box>
        <Box border={1} borderRight={0} >hello</Box>
     </Stack>
     
     <h1>Border color</h1>
     <Box  border={1} borderColor='secondary.main'>Hello</Box>

     <h1>Border radius</h1>
     <Box  border={1} borderColor='secondary.main' borderRadius='50%' width={300} height={300}>Hello</Box>

      <h1>Avatar</h1>  
      <Avatar src='https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_640.png'>H</Avatar>
     <Box  mt={5}> <Avatar><DeleteIcon/></Avatar></Box>
     <h1>Avatar group</h1>
     <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
    <h1>Badges</h1>
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
    </>
  );
};

export default App;
