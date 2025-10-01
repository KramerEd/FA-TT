import { createBrowserRouter } from "react-router-dom";
import CharactersListPage from "../pages/CharactersListPage";
import CharacterDetailPage from "../pages/CharacterDetailPage";
import AppLayout from "./AppLayout";

export const appRouter = createBrowserRouter(
  [
    { path: "*", element: <div>Not found</div> },
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <CharactersListPage /> },
        { path: "people/:id", element: <CharacterDetailPage /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

export default appRouter;
