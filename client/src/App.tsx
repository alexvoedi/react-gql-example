import { useQuery, gql } from "@apollo/client";

type Address = {
  name: string;
  phone: string;
};

const GET_ADDRESSES_BY_NAME_QUERY = gql`
query GetAddressesByName($name: String!) {
  getByPartialName(name: $name) {
    name
    phone
  }
}
`;

function App() {
  const { loading, error, data, refetch } = useQuery<{
    getByPartialName: Address[];
  }>(GET_ADDRESSES_BY_NAME_QUERY, {
    variables: { name: "" },
    fetchPolicy: "no-cache",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <input type="text" onChange={(e) => refetch(
        { name: e.target.value }
      )} />

      <ul>
        {data?.getByPartialName.map((address) => (
          <li key={address.name}>
            {address.name}: {address.phone}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
