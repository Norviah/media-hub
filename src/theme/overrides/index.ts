import * as Autocomplete from '@/theme/overrides/Autocomplete';
import * as Backdrop from '@/theme/overrides/Backdrop';
import * as Button from '@/theme/overrides/Button';
import * as Card from '@/theme/overrides/Card';
import * as Input from '@/theme/overrides/Input';
import * as Paper from '@/theme/overrides/Paper';
import * as Rating from '@/theme/overrides/Rating';
import * as Table from '@/theme/overrides/Table';
import * as Tooltip from '@/theme/overrides/Tooltip';

export const LIGHT = {
  ...Card.LIGHT,
  ...Table.LIGHT,
  ...Autocomplete.LIGHT,
  ...Button.LIGHT,
  ...Tooltip.LIGHT,
  ...Backdrop.LIGHT,
  ...Rating.LIGHT,
  ...Input.LIGHT,
  ...Paper.LIGHT,
};

export const DARK = {
  ...Card.DARK,
  ...Table.DARK,
  ...Autocomplete.DARK,
  ...Button.DARK,
  ...Tooltip.DARK,
  ...Backdrop.DARK,
  ...Rating.DARK,
  ...Input.DARK,
  ...Paper.DARK,
};
