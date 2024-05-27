import LoadingOverlay from "@/components/loading-overlay";
import { useAuth } from "@/provider/auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function withoutAuth(Component: React.ComponentType) {

  const NotAuthenticatedComponent = (props: any) => {
    const { state } = useAuth();

    useEffect(() => {
      if (!state.isLoading && state.user) {
        redirect("/app"); 
      }
    }, [state])

    if (state.isLoading) {
      return <LoadingOverlay loading />;
    }

    return <Component {...props} />;
  };

  return NotAuthenticatedComponent;
}
