import { useEffect } from "react";
import { router, Unmatched } from "expo-router";

const CustomUnmatched = () => {
  useEffect(() => {
    router.replace("/signin");
  }, [router]);

  return <Unmatched />;
};

export default CustomUnmatched;
