export enum FIELD_TYPE {
  TEXT = 'text',
  TEXTAREA = 'textarea',
  DROPDOWN = 'dropdown',
  DATE = 'date',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  FORM_ARRAY = 'formarray',
  FORM_GROUP = 'formgroup',
  CUSTOM_PHONE = 'custom_phone'
}

export interface ValidatorSchema {
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: RegExp;
}

export interface DropdownOptions {
  options: any[];
  labelToBind: string;
  valueToBind: string;
}

export interface FieldSchema {
  name: string;
  type: FIELD_TYPE;
  validator: ValidatorSchema;
  label: string;
  value?: any;
  dropdownValues?: DropdownOptions;
  options?: any;
  fields?: FieldSchema[] | FormSchema;
}

export interface FormSchema {
  [key: string]: FieldSchema
}