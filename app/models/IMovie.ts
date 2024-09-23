
export interface IMovieList {
  _total_items: number;
  _page: number;
  _page_count: number;
  _links: ILinks;
  _embedded: Embedded;
}

export interface Embedded {
  movies: IMovie[];
}
export interface IMovie {
    id: number;
    cineamoId: string;
    title: string;
    lastUpdated: number;
    series: boolean;
    selectedByCinema: boolean;
    adult: boolean;
    belongsToCollection?: any;
    backdropPath: string;
    genres: IGenre[];
    homepage: string;
    imdbId?: any;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: number;
    posterPath: string;
    productionCompanies: IProductionCompany[];
    productionCountries: IProductionCountry[];
    releaseDate?: any;
    revenue?: any;
    runtime?: any;
    firstAirDate: string;
    spokenLanguages: ISpokenLanguage[];
    status: string;
    tagline?: any;
    video: boolean;
    voteAverage: number;
    voteCount: number;
    alternativeTitles: IAlternativeTitles;
    credits: ICredits;
    images: IImages;
    keywords: IKeywords;
    videos: IVideos;
    translations: ITranslations;
    similar: ISimilar;
    reviews: IReviews;
    releaseDates?: any;
    noRightsAvailable: boolean;
    noRightsTimestamp?: any;
    thirdParties?: any;
    slug: string;
    _links: ILinks;
  }
  
  export interface ILinks {
    self: ISelf;
  }
  
  export interface ISelf {
    href: string;
  }
  
  export interface IReviews {
    page: number;
    totalPages: number;
    totalResults: number;
    results: any[];
  }
  
  export interface ISimilar {
    page: number;
    totalPages: number;
    totalResults: number;
    results: IResult2[];
  }
  
  export interface IResult2 {
    id: number;
    series: boolean;
    selectedByCinema: boolean;
    adult: boolean;
    backdropPath: string;
    originalLanguage: string;
    originalTitle?: any;
    overview?: string;
    popularity: number;
    posterPath: string;
    releaseDate?: any;
    title?: any;
    video: boolean;
    voteAverage: number;
    voteCount: number;
    noRightsAvailable: boolean;
    genreIds: any[];
  }
  
  export interface ITranslations {
    id?: any;
    translations: ITranslation[];
  }
  
  export interface ITranslation {
    iso31661: string;
    iso6391: string;
    name?: string;
    englishName: string;
    data: IData;
  }
  
  export interface IData {
    title?: any;
    overview: string;
    homepage?: any;
    runtime?: any;
    tagline?: any;
  }
  
  export interface IVideos {
    id?: any;
    results: IResult[];
  }
  
  export interface IResult {
    id: string;
    iso6391: string;
    iso31661: string;
    key: string;
    name: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    publishedAt: string;
  }
  
  export interface IKeywords {
    id?: any;
    keywords: any[];
  }
  
  export interface IImages {
    id?: any;
    backdrops: IBackdrop[];
    posters: IBackdrop[];
  }
  
  export interface IBackdrop {
    aspectRatio: number;
    filePath: string;
    height: number;
    iso6391?: string;
    voteAverage: number;
    voteCount: number;
    width: number;
  }
  
  export interface ICredits {
    id?: any;
    cast: ICast[];
    crew: ICrew[];
  }
  
  export interface ICrew {
    creditId: string;
    gender: number;
    id: number;
    name: string;
    profilePath?: string;
    department: string;
    job: string;
  }
  
  export interface ICast {
    castId?: any;
    character: string;
    creditId: string;
    gender: number;
    id: number;
    name: string;
    order: number;
    profilePath: string;
  }
  
  export interface IAlternativeTitles {
    id?: any;
    titles: any[];
  }
  
  export interface ISpokenLanguage {
    name: string;
    iso6391: string;
  }
  
  export interface IProductionCountry {
    iso31661: string;
    name: string;
  }
  
  export interface IProductionCompany {
    name: string;
    id: number;
    logoPath?: string;
    originCountry?: string;
  }
  
  export interface IGenre {
    id: number;
    name: string;
  }