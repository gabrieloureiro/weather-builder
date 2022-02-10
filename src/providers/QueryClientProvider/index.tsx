import { QueryClientProvider as ReactQueryClientProvider } from "react-query";
import { queryClient } from "services/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";

export const QueryClientProvider: React.FC = ({ children }) => {
  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </ReactQueryClientProvider>
  );
};
