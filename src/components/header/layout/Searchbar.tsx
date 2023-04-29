import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/lab/LoadingButton';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Slide from '@mui/material/Slide';

import { Link } from '@/components/Link';
import { bgBlur } from '@/util/css';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useRouter } from 'next/router';

import * as shadows from '@/theme/shadows';
import * as constants from '@/util/constants';

const StyledSearchbar = styled('div')(({ theme }) => ({
  top: 0,
  backgroundColor: theme.palette.background.default,
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
  const [query, setQuery] = useState<string>('');

  const router = useRouter();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
    setQuery('');
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search?query=${query}`);
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
        <form onSubmit={submit}>
          <Slide direction="down" in={open} mountOnEnter unmountOnExit>
            <StyledSearchbar>
              <Input
                autoFocus
                fullWidth
                disableUnderline
                placeholder="Search…"
                id="searchbar"
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon sx={{ width: 20, height: 20 }} />
                  </InputAdornment>
                }
                sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
              />
              <Button
                LinkComponent={Link}
                href={`/search?query=${query}`}
                variant="contained"
                type="submit"
                onClick={handleClose}
                disabled={query.length <= 0}
              >
                Search
              </Button>
            </StyledSearchbar>
          </Slide>
        </form>
      </div>
    </ClickAwayListener>
  );
}
