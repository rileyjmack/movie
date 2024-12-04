import Celebs from "./celebs";
import { SearchInput } from "./searchbar";

export default async function Home() {
  return (
    <div>
      <SearchInput />
      <Celebs />
    </div>
  );
}
