export type Book = {
  allowAnonLogging: boolean;
  authors: string[];
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  description: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
    small : string;
  };
  industryIdentifiers: {
    type: string;
    identifier: string;
  }[];
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  previewLink: string;
  printType: string;
  publishedDate: string;
  publisher: string;
  readingModes: {
    text: boolean;
    image: boolean;
  };
  subtitle: string;
  title: string;
};

export type BookItem = {
  id: string;
  volumeInfo: Book;
};

export type BookResponseType = {
  kind: string;
  totalItems: number;
  items: BookItem[];
};

export type BookRequestParamsType = {
  search: string;
  categories: string;
  sortBy: string;
  maxResults?: number;
};
