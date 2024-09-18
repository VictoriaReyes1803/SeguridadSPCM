export interface FormField {
    type: string;
    label: string;
    name: string;
    value?: any;
    options?: { value: string; label: string }[];
  }
  