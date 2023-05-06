import { ClatteryImage } from "../ClatteryImage/ClatteryImage";

interface AuxProps {
  children: JSX.Element,
  bannerHeight: string,
  adjustingHeight: string,
  mainImage: MainImage
}

export function Banner({ children, bannerHeight, adjustingHeight, mainImage }: AuxProps) {
  return (
    <>
      <section className="absolute top-0">
        <ClatteryImage
          className={`w-screen ${bannerHeight} -hue-rotate-30 backdrop-contrast-50 object-cover`}
          alt=""
          src={mainImage}
        />
        <div className="bg-black/30 w-full h-full top-0 z-0 absolute" />
        <div className="absolute w-full h-full top-0">{children}</div>
      </section>
      <div className={`${adjustingHeight} w-0 pointer-events-none -z-[5]`} />
    </>
  );
}
