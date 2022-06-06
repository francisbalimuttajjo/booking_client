import React from "react";
import { useQueryClient } from "react-query";
import { Hotel } from "../../types/apiTypes";

const UseFns = () => {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [information, setInformation] = React.useState<string>("");

  const hotels: Hotel[] | undefined = queryClient.getQueryData("HOTELS");
  const [data, setData] = React.useState<Hotel[] | undefined>([]);

  const onChangeSearch = (searchQuery: string) => {
    setSearchQuery(searchQuery);

    const searchedHotels: Hotel[] | undefined = hotels?.filter(
      (hotel) =>
        hotel.name.includes(searchQuery) || hotel.name.includes(searchQuery)
    );
    setInformation(`Search Results: ${searchedHotels?.length}`);
    setData(searchedHotels);
  };

  return { searchQuery, onChangeSearch, data, information };
};

export default UseFns;
