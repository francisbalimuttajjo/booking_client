import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { Hotel } from "../../types/apiTypes";
import api from "../../utils/api";

type Response = {
  data: {
    count: number;
    rows: Hotel[];
  };
};

const UseFns = () => {
  const queryClient = useQueryClient();

  const [information, setInformation] = React.useState<string>("");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [data, setData] = React.useState<Hotel[] | undefined>([]);
  const [isPriceOpen, setIsPriceOpen] = React.useState<boolean>(false);
  const [isLocationOpen, setIsLocationOpen] = React.useState<boolean>(false);

  const onDismissPrice = () => setIsPriceOpen(false);
  const onDismissLocation = () => setIsLocationOpen(false);
  const openPrice = () => setIsPriceOpen(true);
  const openLocation = () => setIsLocationOpen(true);

  const hotels: Hotel[] | undefined = queryClient.getQueryData("HOTELS");

  const hotelLocationsArray = hotels?.reduce((arr: string[], hotel) => {
    arr.push(hotel.physicalLocation);
    return arr;
  }, []);

  const hotelPricesArray = hotels?.reduce((arr: string[], hotel) => {
    arr.push(`$ ${hotel.price.toString()}`);
    return arr;
  }, []);

  const { isLoading: loadingName, mutate: mutateName } = useMutation(
    (searchQuery: string) => api.searchHotelByName(searchQuery),
    {
      onSuccess: async (data: Response) => {
        setData(data.data.rows);
        setInformation(`Search Results: ${data.data.count}`);
        queryClient.setQueryData("SEARCH_RESULTS_NAME", searchQuery);
      },
      onError: () => {
        setInformation(`Something went wrong`);
      },
    }
  );

  const { isLoading: loadingLocation, mutate: mutateLocation } = useMutation(
    (searchQuery: string) => api.searchHotelByLocation(searchQuery),
    {
      onSuccess: async (data: Response) => {
        setData(data.data.rows);
        setInformation(`Search Results: ${data.data.count}`);
        queryClient.setQueryData("SEARCH_RESULTS_LOCATION", searchQuery);
      },
      onError: () => {
        setInformation(`Something went wrong`);
      },
    }
  );
  const { isLoading: loadingPrice, mutate: mutatePrice } = useMutation(
    (price: string) => api.searchHotelByPrice(price),
    {
      onSuccess: async (data: Response) => {
        setData(data.data.rows);
        setInformation(`Search Results: ${data.data.count}`);
      },
      onError: () => {
        setInformation(`Something went wrong`);
      },
    }
  );
  const handleLocation = (val: string) => {
    setIsLocationOpen(false);
    mutateLocation(val);
  };

  const onChangeSearch = (searchQuery: string) => {
    setSearchQuery(searchQuery);
    mutateName(searchQuery);
  };

  const handlePrice = (price: string) => {
    setIsPriceOpen(false);
    const data = price.split(" ");
    mutatePrice(data[1]);
  };

  return {
    hotelLocationsArray,
    hotelPricesArray,
    information,
    searchQuery,
    data,
    handlePrice,
    handleLocation,
    onChangeSearch,
    loadingPrice,
    loadingName,
    loadingLocation,
    isLocationOpen,
    isPriceOpen,
    onDismissLocation,
    onDismissPrice,
    openPrice,
    openLocation,
  };
};

export default UseFns;
