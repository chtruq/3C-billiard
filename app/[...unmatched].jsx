import { useEffect } from "react";
import { router, Unmatched } from "expo-router";

const CustomUnmatched = () => {
  useEffect(() => {
    router.replace("/");
  }, [router]);

  return <Unmatched />;
};

export default CustomUnmatched;

// import { Unmatched } from "expo-router";
// export default Unmatched;
