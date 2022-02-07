export interface SearchResult {
  weight: number;
  catalogue: Catalogue;
}

interface Catalogue {
  pattern: any[];
  paper: any[];
  _id: string;
  title: string;
  description: string;
  date: string;
}

export interface SearchQuery{
  query: string;
}

// TODO: agregar una interfaz para el caso que responda error

