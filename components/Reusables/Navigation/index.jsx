import styles from "./Navigation.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const [sideBar, setSideBar] = useState(false)

  return (
    <>
      <div className={`${styles.sidebar} ${sideBar ? styles.visible : null}`}>
        <h2 className={styles.heading}>3D Viewer</h2>
        <Link href="/arduino" passHref>
          <span>Arduino</span>
        </Link>
        <Link href="/ultrasonic_sensor" passHref>
          <span>Distance Sensor</span>
        </Link>
      </div>
      <nav className={styles.navigation}>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.icon}
          onClick={() => { setSideBar(!sideBar) }}
          style={sideBar ? {
            transition: "all 1s ease-in-out",
            transform: "translateX(22vw)"
          } : {
            transition: "all 1s ease-in-out",
          }}
        />
        <div className={styles.logo}>
          <h2>JJ</h2>
          <div className={styles.waviy}>
            {"Janmejay".split("").map((i, index) => {
              return <span style={{ "--i": index }} key={`${index}`} > {i}</span>
            })}
          </div>
        </div>
      </nav >
    </>
  )
}

export default Navigation
