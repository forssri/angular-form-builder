import { Component } from '@angular/core';
import { FormBuilderService } from './form-builder.service';
import { layoutTree, formSchema } from './app.constants';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  form: FormGroup;

  tree = layoutTree;

  fSchema = formSchema;
  constructor(private fbService: FormBuilderService) {
    this.form = this.fbService.createFormGroup(formSchema);
  }
}
