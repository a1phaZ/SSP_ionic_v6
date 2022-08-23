export class TabsPageConfig {
  constructor(
    public header: boolean,
    public tabs: TTab[]
  ) {}
}

export interface ITabsPageConfig {
  header: boolean;
  tabs: TTab[];
}

export type TTab = {
  tab: string;
  icon?: string;
  label?: string;
};
