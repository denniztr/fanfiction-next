import { useMemo } from "react";
import { usePathname } from "next/navigation";

const useRoutes = () => {
  const pathname = usePathname();

  const router = useMemo(
    () => [
      {
        label: 'Фанфики',
        path: '/fanfiction',
        active: pathname === '/fanfiction'
      },
      {
        label: 'Авторы',
        path: '/authors',
        active: pathname === '/authors'
      },
      {
        label: 'Популярное',
        path: '/popular',
        active: pathname === '/popular'
      },
      {
        label: 'Ордеры',
        path: '/orders',
        active: pathname === '/orders'
      },
    ], [pathname]
  )

  return router
}

export default useRoutes;