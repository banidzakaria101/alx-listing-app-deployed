export interface CardProps {
  title: string;
  image: string;
  description: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  id?: string;
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
  description?: string;
  images?: string[];
  reviews?: Review[];
}

export interface PillProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
}

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}