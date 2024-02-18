import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants"
import styles from "../landingimg/LandingImage.module.css"
import Image from "next/image"

export default function LandingImage() {
    return (
        <>
        <div>
            <Image
            alt="landing image"
            src={""}
            width={20}
            height={20}
            />
        </div>
        </>
    )
}