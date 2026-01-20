"use client";

export default function ShopItem(props: any) {
  const { file } = props;
  const fileMap: any = {
    "baseball-hat.png":
      "https://storeforwsiltd.creator-spring.com/listing/rainbow-logo-hat?product=2150&variation=105986",
    "hoodie.png":
      "https://storeforwsiltd.creator-spring.com/listing/rainbow-logo-2025?product=212&variation=5818",
    "mug.png":
      "https://storeforwsiltd.creator-spring.com/listing/rainbow-logo-2025?product=1565&variation=104920",
    "puzzle.png":
      "https://storeforwsiltd.creator-spring.com/listing/puzzle-2026?product=1934&variation=105445",
  };
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
      <a
        href={
          fileMap[file]
            ? fileMap[file]
            : "https://storeforwsiltd.creator-spring.com/"
        }
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <img
          src={`./shop/${file}`}
          className="bg-card rounded-2xl p-8 border border-border shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full"
        />
      </a>
    </div>
  );
}
