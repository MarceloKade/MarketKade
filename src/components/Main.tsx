import { Accessories } from "./main/Accessories";
import { Categories } from "./main/Categories";
import { Headphones } from "./main/Headphones";
import { Laptops } from "./main/Laptops";
import { ShopByBrands } from "./main/ShopByBrands";
import { SideOfferProducts } from "./main/SideOfferProducts";
import { Televisions } from "./main/Televisions";
import { TodaysDeal } from "./main/TodaysDeal";

export function Main() {
    return (
        <main>
            <section>
                <Categories />
                <SideOfferProducts />
            </section>
            <section>
                <TodaysDeal />
            </section>
            <section>
                <Laptops />
            </section>
            <section>
                <Televisions />
            </section>
            <section>
                <Headphones />
            </section>
            <section>
                <Accessories />
            </section>
            <section>
                <ShopByBrands />
            </section>
        </main>
    );
}