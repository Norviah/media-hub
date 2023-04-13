import { Autocomplete } from '@/theme/overrides/Autocomplete';
import { Backdrop } from '@/theme/overrides/Backdrop';
import { Button } from '@/theme/overrides/Button';
import { Card } from '@/theme/overrides/Card';
import { Input } from '@/theme/overrides/Input';
import { Paper } from '@/theme/overrides/Paper';
import { Rating } from '@/theme/overrides/Rating';
import { Table } from '@/theme/overrides/Table';
import { Tooltip } from '@/theme/overrides/Tooltip';
import { Typography } from '@/theme/overrides/Typography';

import type { ThemeOptions } from '@/types/mui/ThemeOptions';

export function ComponentsOverrides(theme: ThemeOptions): void {
  return Object.assign(
    Paper(),
    Card(theme),
    Table(theme),
    Input(theme),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    Autocomplete(theme),
    Rating()
  );
}
