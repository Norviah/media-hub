import styled from '@emotion/styled';
import { MaterialDesignContent } from 'notistack';

import * as palettes from '@/theme/palette';

const Style = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent': {
    padding: 10,
  },
  '&.notistack-MuiContent-success': {
    backgroundColor: palettes.BASE.success.main,
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: palettes.BASE.error.main,
  },
  '&.notistack-MuiContent-info': {
    backgroundColor: palettes.BASE.info.main,
  },
  '&.notistack-MuiContent-warning': {
    backgroundColor: palettes.BASE.warning.main,
  },
  '&.notistack-MuiContent-default': {
    backgroundColor: palettes.THEME.BLACK.LIGHT,
  },
}));

export const StyledComponents = {
  success: Style,
  error: Style,
  info: Style,
  warning: Style,
  default: Style,
};
