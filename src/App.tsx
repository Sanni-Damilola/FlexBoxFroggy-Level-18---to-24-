import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/router";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <RouterProvider router={routes} />
      </RecoilRoot>
    </div>
  );
};

export default App;
