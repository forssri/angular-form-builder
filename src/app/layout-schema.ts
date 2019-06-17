export enum Layout {
  ROW = 'row',
  COLUMN = 'column'
}

export interface LayoutSchema {
  selector: string;
  options?: any;
  classList?: string;
  content?: LayoutSchema[];
}
