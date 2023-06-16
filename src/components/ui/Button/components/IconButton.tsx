import { ButtonProps } from '../types/ButtonProps';
import Button from './Button';

export default function IconButton(props: ButtonProps): JSX.Element {
  return <Button {...props} icon />;
}
