import fs from "fs";
import path from "path";
import MainShop from "@/components/Shop/MainShop";

export default function ShopPage() {
  const shopDir = path.join(process.cwd(), "public", "shop");
  const files = fs.readdirSync(shopDir);

  return (
    <main className="pt-16 h-screen">
      <MainShop files={files} />
    </main>
  );
}
