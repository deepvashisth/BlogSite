import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function MenuPop(props) {
  return (
    <div>
      <Popover
        id={props.id}
        open={props.open}
        anchorEl={props.anchorEl}
        onClose={props.handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
            <ul>
              <li>Dynamic Programming</li>
              <li>Graphs</li>
              <li>Greedy Algirthms</li>
              <li>Binary Tree</li>
              <li>Sorting</li>
              <li>Searching</li>
            </ul>
        </Typography>
      </Popover>
    </div>
  );
}


export default MenuPop;