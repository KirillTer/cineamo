export interface IListCinema {
  _total_items: number;
  _page: number;
  _page_count: number;
  _links: ILinks;
  _embedded: IEmbedded;
}

export interface IEmbedded {
  cinemas: ICinema[];
}

export interface ICinema {
  id: number;
  name: string;
  slug: string;
  description: string;
  phone: string;
  street: string;
  postalCode: string;
  city: string;
  state: string;
  stateAbbr: string;
  country: string;
  countryCode: string;
  currencyCode: string;
  longitude: number;
  latitude: number;
  distance?: any;
  imageUrl: string;
  logoUrl?: any;
  profileImageRef: string;
  profileImageUrl: string;
  logoImageRef?: string;
  logoImageUrl?: string;
  logoWideImageRef?: string;
  logoWideImageUrl?: string;
  priceTablePdfRef?: any;
  priceTablePdfUrl?: any;
  primaryColor?: string;
  instagramLink: string;
  facebookLink: string;
  ticketSystemId: string;
  ticketSystem: string;
  email: string;
  isActive: boolean;
  isCustomer: boolean;
  cinemaConfigurationId: number;
  showtimesUpdated: string;
  isFavoritedCinema?: any;
  isFavorite?: any;
  hasMarketingAssistantBooked: boolean;
  cineamoTrailerConfirmedDatetime?: string;
  _links: ILinks2;
}

export interface ILinks2 {
  self: ISelf;
}

export interface ILinks {
  self: ISelf;
  next: ISelf;
  last: ISelf;
}

export interface ISelf {
  href: string;
}