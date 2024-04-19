/* eslint-disable no-unused-vars */
import Layout from "./layout";
import RouterWeb from "./router";
import { Routes, Route, Navigate } from "react-router-dom";
import Pages from "./page";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const AuthAccount = ({ children }) => {
    // console.log('hello')
    // return token ? children : <Navigate to='/login' />
    return children;
  };
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Pages.HomePage />
              </Layout>
            }
          />
          {RouterWeb.map((item) => {
            if (!item.child) {
              return (
                <Route
                  key={item.id}
                  path={item.path}
                  element={
                    <AuthAccount>
                      <Layout>{item.component} </Layout>{" "}
                    </AuthAccount>
                  }
                />
              );
            } else if (item.child) {
              return (
                <Route
                  key={item.id}
                  path={item.path}
                  element={
                    <AuthAccount>
                      <Layout>{item.component} </Layout>{" "}
                    </AuthAccount>
                  }
                >
                  {item.child.map((child, index) => {
                    return (
                      <Route
                        exact
                        path={child.path}
                        key={index}
                        element={child.component}
                      />
                    );
                  })}
                </Route>
              );
            }
          })}

          <Route path="*" element={<Pages.NotFoundPage />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
