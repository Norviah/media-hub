import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Slide from '@mui/material/Slide';

import { bgBlur } from '@/util/css';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import * as shadows from '@/theme/shadows';
import * as constants from '@/util/constants';

const StyledSearchbar = styled('div')(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: constants.SPACING.MOBILE,
  padding: theme.spacing(0, 3),
  boxShadow: (theme.palette.mode === 'light' ? shadows.LIGHT : shadows.DARK).z8,
  [theme.breakpoints.up('md')]: {
    height: constants.SPACING.DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

export default function Searchbar(): JSX.Element {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!open && (
          <IconButton onClick={handleOpen}>
            <SearchIcon />
          </IconButton>
        )}
        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <StyledSearchbar>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
            />
            <Button variant="contained" onClick={handleClose}>
              Search
            </Button>
          </StyledSearchbar>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
