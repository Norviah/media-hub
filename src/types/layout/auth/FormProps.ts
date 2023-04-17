export interface FormProps {
  password: {
    show: boolean;
    set: (show: boolean) => void;
  };

  loading: {
    value: boolean;
    set: (value: boolean) => void;
  };

  callbackUrl: string;
}
