export interface Quote {
  text: string;
  author: string;
}

export interface QuoteAPIResponse {
  success: Success;
  contents: Contents;
  baseurl: string;
  copyright: Copyright;
}

export interface Contents {
  quotes: QuoteElement[];
}

export interface QuoteElement {
  quote: string;
  length: string;
  author: string;
  tags: string[];
  category: string;
  language: string;
  date: string;
  permalink: string;
  id: string;
  background: string;
  title: string;
}

export interface Copyright {
  year: number;
  url: string;
}

export interface Success {
  total: number;
}
