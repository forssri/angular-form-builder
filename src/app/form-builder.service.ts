import { Injectable } from '@angular/core';
import { FieldSchema, FormSchema, FIELD_TYPE, ValidatorSchema } from './field-schema';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Injectable()
export class FormBuilderService {

  constructor() { }

  createFormGroup(formSchema: FormSchema) {
    const form = new FormGroup({});
    for(const key in formSchema) {
      if(formSchema[key]) {
        const fieldSchema = formSchema[key];
        const field = this.createFields(fieldSchema);
        form.addControl(key, field);
      }
    }
    return form;
  }

  createFormArray(fields: FieldSchema[]) {
    const formArray = new FormArray([]);
    for(const field of fields) {
      formArray.push(this.createFields(field));
    }
    return formArray;
  }

  createFields(fieldSchema: FieldSchema) {
    switch(fieldSchema.type) {
      case FIELD_TYPE.FORM_GROUP:
        return this.createFormGroup((fieldSchema.fields as FormSchema));
      case FIELD_TYPE.FORM_ARRAY:
        const fields = (fieldSchema.fields as FieldSchema[]);
        return this.createFormArray(fields);
      default:
        return new FormControl('', this.setValidators(fieldSchema.validator));
    }
  }

  setValidators(validatorSchema: ValidatorSchema) {
    const { required, minLength, maxLength, pattern } = validatorSchema;
    const validatorArray = [];
    if (required) {
      validatorArray.push(Validators.required);
    }
    if (minLength) {
      validatorArray.push(Validators.minLength(minLength));
    }
    if (maxLength) {
      validatorArray.push(Validators.maxLength(maxLength));
    }
    if (pattern) {
      validatorArray.push(Validators.pattern(pattern));
    }
    return validatorArray;
  }

}