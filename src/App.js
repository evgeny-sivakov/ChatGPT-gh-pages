import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthenticationPage, {
  action as authAction,
} from "./pages/Authentication";
import ChatPage from "./pages/Chat";

const router = createBrowserRouter([
  {
    path: "/ChatGPT-gh-pages",
    id: "root",
    children: [
      {
        index: true,
        element: <AuthenticationPage />,
        action: authAction,
      },
      { path: "chat", element: <ChatPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
