import React from "react";
import { useRouter, NextRouter } from "next/router";

function blogDetail() {
  const router: NextRouter = useRouter();
  const { blogID } = router.query;

  return <>blogID: {blogID}</>;
}

export default blogDetail;
