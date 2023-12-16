import { useQuery } from '@tanstack/react-query';
export default function useProducts() {
  const fetchProducts = async () => {
    const response = await fetch('~.json');

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    console.log(data);
    
    return data;
  };

  const productsQuery = useQuery({
    queryKey: ['product'],
    queryFn: fetchProducts
  });


  return { productsQuery };
}


  // function Example() {
  //   const { isPending, error, data } = useQuery({
  //     queryKey: ['repoData'],
  //     queryFn: () =>
  //       fetch('https://api.github.com/repos/TanStack/query').then(
  //         (res) => res.json(),
  //       ),
  //   })
  

  

