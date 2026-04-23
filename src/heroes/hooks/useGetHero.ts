import { useQuery } from '@tanstack/react-query'
import { getHeroAction } from '../actions/get-hero.action'

export const useGetHero = (hero: string) => {

  return useQuery({
    queryKey: ['hero', hero],
    queryFn: () => getHeroAction(hero),
    // staleTime: 1000 * 60 * 5,   // 5 minutos
    retry: false
  })
}
