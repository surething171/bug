import { cache } from 'react';
export const revalidate = 3;
const getData = cache(async () => {
  const date = new Date();
  return date;
});
export default async function Home() {
  const data = await getData();
  return <div>{data.toISOString()}</div>;
}
