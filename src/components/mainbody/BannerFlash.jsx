export const BannerFlash = () => {
  return (
    <div className="h-80 w-full relative overflow-hidden">
      <div
        className={` h-full w-full relative flex justify-stretch items-stretch overflow-clip`}
      >
        <img
          className={`object-cover w-full h-full absolute`}
          src="/banner.png"
          alt="bannerImg"
        />
      </div>
    </div>
  );
};
