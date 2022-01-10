
import { Suspense } from "react";
import Model from "./Ultrasonic";

export default function Ultrasonic() {
  return (
    <Suspense fallback={null}>
      <Model />
    </Suspense>
  )
}

