export interface catetoryType {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

export interface MarketPriceType {
  market: string;
  division: string;
  min: number;
  max: number;
}

export interface PriceType {
  dir: 'up' | 'down';
  pct: number;
}

export interface ProductType {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: PriceType;
  markets: MarketPriceType[];
}