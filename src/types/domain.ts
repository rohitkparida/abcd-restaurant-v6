export type PublicRoute = '/' | '/menu/' | '/our-story/' | '/gallery/' | '/contact/' | '/reserve/';
export type MenuVariant = '1' | '2' | '3' | '4' | '5';
export type SuccessScreen = 'dinein' | 'delivery' | 'reservation';
export type PaymentExceptionState = 'failed' | 'cancelled';
export type KdsOrderType = 'dine' | 'pickup' | 'delivery';
export type ReservationStep = 1 | 2 | 3 | 'confirmed';

export interface MenuCategory { id: string; label: string; image: string }
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  vegetarian?: boolean;
  spicy?: boolean;
  featured?: boolean;
}
export interface ReservationState {
  step: ReservationStep;
  date: string;
  time: string;
  experience: string;
  guests: string;
  seating: string;
  name: string;
  phone: string;
  email: string;
  occasion: string;
  request: string;
  code: string;
}
export interface VisualReference {
  id: string;
  route: string;
  file: string;
  width: number;
  height: number;
  authority: 'approved-mockup' | 'v5-baseline' | 'inferred';
}
