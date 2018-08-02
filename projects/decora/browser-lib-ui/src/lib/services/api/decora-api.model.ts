export class UserAuthData {
  public id: string;
  public email: string;
  public name: string;
  public country: string;
  public company: string;
  public role: number;
  public permissions: Array<string>;

  constructor(user: any = {}) {
    this.id = user.id || undefined;
    this.email = user.email || undefined;
    this.name = user.name || undefined;
    this.country = user.country || undefined;
    this.company = user.company || undefined;
    this.role = user.role || undefined;
    this.permissions = user.permissions || undefined;
  }
}

export interface LoginData {
  email: string;
  password: string;
  keepLogged: boolean;
}

export interface FacebookLoginData {
  keepLogged: boolean;
  facebookToken: string;
}

export interface ServiceConfig {
  host: string;
  authHost?: string;
  useMockApi?: boolean;
  mockApiHost?: string;
}



/*
  * FilterGroups
  *
  * an Array of filter group
  */
export type FilterGroups = FilterGroup[];

/*
  * Filters
  *
  * an Array of filter
  */
export type Filters = Filter[];

/*
  * FilterData
  *
  * Filter configuration
  */
export interface FilterData {
  endpoint: string;
  payload: DecFilter;
  cbk?: Function;
  clear?: boolean;
}

/*
  * Filter
  *
  * Filter configuration
  */
export interface DecFilter {
  filterGroups?: FilterGroups;
  projectView?: any;
  columns?: any;
  page?: number;
  limit?: number;
  textSearch?: string;
}

/*
  * Filter
  *
  * Filter configuration
  */
export interface SerializedDecFilter {
  filter?: string;
  projectView?: string;
  columns?: string;
  page?: number;
  limit?: number;
  textSearch?: string;
}

/*
  * Filter
  *
  * Signle filter
  */
export interface Filter {
  property: string;
  value: string | string[];
}

/*
  * FilterGroup
  *
  * Group of Filter
  */
export interface FilterGroup {
  filters: Filters;
}

/*
  * ColumnsSortConfig
  *
  * Configuration to sort columns
  */
export interface ColumnsSortConfig {
  property: string;
  order: {
    type: 'asc' | 'desc'
  };
}
