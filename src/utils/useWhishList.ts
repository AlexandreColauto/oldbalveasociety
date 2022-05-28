import { useMoralis } from "react-moralis";
function useWhishList() {
  const { isAuthenticated, Moralis, user } = useMoralis();
  const addToWishList = async () => {
    if (!isAuthenticated) return;
    const Collection = Moralis.Object.extend({
      className: "wishList",
    });
    const collection = new Collection();
    const address = user?.attributes.ethAddress;

    const result = await collection.save({ userAddress: address });
    console.log(result);
    if (result) return true;
    return false;
  };

  const getWishList = async () => {
    if (!isAuthenticated) return;
    const Collection = Moralis.Object.extend({
      className: "wishList",
    });
    const address = user?.attributes.ethAddress;
    const query = new Moralis.Query(Collection);
    query.equalTo("userAddress", address);
    const results = await query.find();
    console.log(results);
    if (results.length > 0) return true;
    return false;
  };
  return [addToWishList, getWishList];
}

export default useWhishList;
