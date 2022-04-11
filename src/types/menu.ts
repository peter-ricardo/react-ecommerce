export interface IMenuLink {
  name: string;
  path: string;
}

export interface IMenu {
  name: string;
  links: IMenuLink[];
}
