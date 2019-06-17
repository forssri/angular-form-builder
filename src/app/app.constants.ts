import { FormSchema, FIELD_TYPE } from './field-schema';
import { LayoutSchema, Layout } from './layout-schema';

export const layoutTree: LayoutSchema = {
  selector: Layout.ROW,
  content: [
    {
      selector: Layout.COLUMN,
      classList: 'col-md-4',
      content: [
        {
          selector: 'firstName'
        }
      ]
    },
    {
      selector: Layout.COLUMN,
      classList: 'col-md-4',
      content: [
        {
          selector: 'lastName'
        }
      ]
    },
    {
      selector: Layout.COLUMN,
      classList: 'col-md-4',
      content: [
        {
          selector: 'dob'
        }
      ]
    },
    {
      selector: Layout.COLUMN,
      classList: 'col-md-4',
      content: [
        {
          selector: 'phone'
        }
      ]
    }
  ]
};

export const formSchema: FormSchema = {
  'firstName': {
    name: 'firstName',
    type: FIELD_TYPE.TEXT,
    label: 'First Name',
    validator: {
      required: true,
      minLength: 4
    }
  },
  'lastName': {
    name: 'lastName',
    type: FIELD_TYPE.TEXT,
    label: 'Last Name',
    validator: {
      required: true,
      minLength: 4
    }
  },
  'dob': {
    name: 'dob',
    type: FIELD_TYPE.DATE,
    label: 'DOB',
    validator: {
      required: true
    }
  },
  'phone': {
    name: 'phone',
    type: FIELD_TYPE.CUSTOM_PHONE,
    label: 'test',
    validator: {}
  }
}