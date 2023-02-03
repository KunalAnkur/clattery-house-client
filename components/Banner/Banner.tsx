interface AuxProps {
  children: JSX.Element,
  bannerHeight: string,
  adjustingHeight: string
}

export function Banner({ children, bannerHeight, adjustingHeight }: AuxProps) {
  return (
    <>
      <section className="absolute top-0">
        <img
          className={`w-screen ${bannerHeight} -hue-rotate-30 backdrop-contrast-50 object-cover`}
          alt=""
          src={
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&dl=kalen-emsley-Bkci_8qcdvQ-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
          }
        />
        <div className="bg-black/30 w-full h-full top-0 z-0 absolute" />
        <div className="absolute w-full h-full top-0">{children}</div>
      </section>
      <div className={`${adjustingHeight} w-0 pointer-events-none -z-[5]`} />
    </>
  );
}
