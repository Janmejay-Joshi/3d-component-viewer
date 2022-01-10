import { Suspense } from "react";
import Model from "./Arduino_uno";

export default function Arduino() {
  return (
    <Suspense fallback={null}>
      <Model />
    </Suspense>
  )
}

