import DatePickerWithRange from './date-picker-with-range';
import { Card, CardContent } from '@/components/ui/Card';
import { Label } from '@/components/ui/Label';

export function DemoDatePicker() {
  return (
    <Card>
      <CardContent className='pt-6'>
        <div className='space-y-2'>
          <Label htmlFor='date' className='shrink-0'>
            Pick a date
          </Label>
          <DatePickerWithRange className='[&>button]:w-[260px]' />
        </div>
      </CardContent>
    </Card>
  );
}
