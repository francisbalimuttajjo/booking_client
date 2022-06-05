

export type User = {
  email: string;
  firstName: string;
  lastName: string;
  id: string;
  photo: string;
};

export type Review = {
  id: number;
  hotel_id: number;
  user: string;
  rating: number;
  review: string;
  author: User;
};

export type Hotel = {
  name: string;
  id: number;
  mainImage: string;
  price: number;
  physicalLocation: string;
  slug: string;
  noOfRatings: number;
  averageRating: number;
  description: string;
  reviews?:Review[]
};

export type HotelDetailsResponse = {
  data: {
    averageRating: number;
    noOfRatings: number;
    status: string;
    hotel: Hotel;
  };
};

export type InitialState = {
  isLoggedIn: boolean;
  user: User;
  handleLogin: (a: InitialState["user"]) => void;
};

export type NavigationProps = {
  navigate: (route: string, params?: { id?: number }) => void;
  goBack: () => void;
};

export type HotelDetailsNavigationProps = {
  navigate: (route: string, params: { hotel?: Hotel }) => void;
};
