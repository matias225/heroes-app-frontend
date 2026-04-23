import { useQuery } from "@tanstack/react-query";

import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { useParams, useSearchParams } from "react-router";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { searchHeroesAction } from "@/heroes/actions/search-heroes.action";

export const SearchPage = () => {

  const [searchParams] = useSearchParams();

  const name = searchParams.get('name') ?? undefined;
  const strength = searchParams.get('strength') ?? undefined;


  useParams();
  // TODO 
  const { data: searchedHeroes = [] } = useQuery({
    queryKey: ['search', { name, strength }],
    queryFn: () => searchHeroesAction({ name, strength }),
    staleTime: 1000 * 60 * 5,
  })

  return (
    <>
      <CustomJumbotron
        title="Search"
        description="Discover, explore, and manage your favorite superheroes and villains"
      />
      <CustomBreadcrumbs
        currentPage="Buscador de heroes"
      // breadcrumbs={[
      //   { label: 'Home1', to: '/' },
      //   { label: 'Home2', to: '/' },
      //   { label: 'Home3', to: '/' },
      // ]} 
      />

      <HeroStats />
      {/* Filter and Search */}
      <SearchControls />

      <HeroGrid heroes={searchedHeroes} />
    </>
  );
}

export default SearchPage;
