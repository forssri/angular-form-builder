import { Component, OnInit, Input } from '@angular/core';
import { LayoutSchema, Layout } from '../layout-schema';
import { FormSchema, FIELD_TYPE } from '../field-schema';

@Component({
  selector: 'app-layout-builder',
  templateUrl: './layout-builder.component.html',
  styleUrls: ['./layout-builder.component.css']
})
export class LayoutBuilderComponent implements OnInit {

  @Input() layoutTree: LayoutSchema;
  @Input() formSchema: FormSchema;
  @Input() form;
  @Input() child = false;

  constructor() { }

  get layoutType() {
    return Layout;
  }

  ngOnInit() {
  }

}