import { StyledProduct } from "./StyledProduct.styled";
import Accordion from "../components/Accordion/Accordion";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import PageTitle from "../components/PageTitle/PageTitle";
import ProductCard from "../components/ProductCard/ProductCard";

const product = {
  id: 1,
  brand: "Audio-Technica",
  model: "KEF Q150",
  category: "Bookshelf Speaker",
  product_type: "bookshelfSpeaker",
  code: "MQ9X3",
  img_card:
    "https://res.cloudinary.com/diasihr5q/image/upload/v1711294102/1_bufwaf.jpg",
  rate: 4.9,
  price: 2000,
  promo_price: 600,
  color: "black",
  new_arrive: false,
  reviewsCount: 21,
  items: [
    {
      color: "black",
      colorHex: "#515151",
      imgUrls: [
        "https://res.cloudinary.com/diasihr5q/image/upload/v1711294102/1_bufwaf.jpg",
        "https://res.cloudinary.com/diasihr5q/image/upload/v1711294102/5_sefeh5.jpg",
        "https://res.cloudinary.com/diasihr5q/image/upload/v1711294102/4_eojysn.jpg",
        "https://res.cloudinary.com/diasihr5q/image/upload/v1711294101/2_xd98ng.jpg",
        "https://res.cloudinary.com/diasihr5q/image/upload/v1711294101/3_bahzvs.jpg",
      ],
    },
    {
      color: "brown",
      colorHex: "#8D6754",
      imgUrls: [
        "https://res.cloudinary.com/diasihr5q/image/upload/v1711294102/5_sefeh5.jpg",
        "https://res.cloudinary.com/diasihr5q/image/upload/v1711294102/1_bufwaf.jpg",
        "https://res.cloudinary.com/diasihr5q/image/upload/v1711294102/4_eojysn.jpg",
        "https://res.cloudinary.com/diasihr5q/image/upload/v1711294101/2_xd98ng.jpg",
        "https://res.cloudinary.com/diasihr5q/image/upload/v1711294101/3_bahzvs.jpg",
      ],
    },
    {
      color: "white",
      colorHex: "#FBFBFB",
      imgUrls: [
        "https://res.cloudinary.com/diasihr5q/image/upload/v1711294102/4_eojysn.jpg",
        "https://res.cloudinary.com/diasihr5q/image/upload/v1711294102/1_bufwaf.jpg",
        "https://res.cloudinary.com/diasihr5q/image/upload/v1711294102/5_sefeh5.jpg",
        "https://res.cloudinary.com/diasihr5q/image/upload/v1711294101/2_xd98ng.jpg",
        "https://res.cloudinary.com/diasihr5q/image/upload/v1711294101/3_bahzvs.jpg",
      ],
    },
  ],
  accessories: ["1234", "5678", "91011"],
};

function Product() {
  const { model, category } = product;

  return (
    <StyledProduct>
      <Breadcrumbs title={model + " " + category} />
      <PageTitle title={"Product"} />
      <ProductCard product={product} />
      <Accordion
        title={"Accessories for bookshelf speaker:"}
        idName={"accessories"}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure quas
          commodi quam quae mollitia culpa nisi quisquam totam tempora amet
          aperiam quos repellendus corrupti voluptas sed voluptates ipsa animi,
          fugiat adipisci. Illum repellendus amet asperiores maxime debitis
          tempore nam, similique labore aliquid cupiditate explicabo, doloribus
          repellat aliquam reiciendis recusandae aperiam sint placeat ipsum
          incidunt, mollitia suscipit. Officia voluptates possimus sequi saepe
          consectetur illo totam officiis excepturi temporibus iusto odit, iure
          asperiores provident eveniet nihil sapiente perferendis, nobis hic
          odio. Optio, eius. Cupiditate voluptatem voluptatum cum molestiae
          error ipsum? Non reprehenderit quidem quaerat corrupti! Natus vero
          nihil voluptate! Totam, consectetur!
        </p>
      </Accordion>
      <Accordion title={"Description"} idName={"description"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure quas
          commodi quam quae mollitia culpa nisi quisquam totam tempora amet
          aperiam quos repellendus corrupti voluptas sed voluptates ipsa animi,
          fugiat adipisci. Illum repellendus amet asperiores maxime debitis
          tempore nam, similique labore aliquid cupiditate explicabo, doloribus
          repellat aliquam reiciendis recusandae aperiam sint placeat ipsum
          incidunt, mollitia suscipit. Officia voluptates possimus sequi saepe
          consectetur illo totam officiis excepturi temporibus iusto odit, iure
          asperiores provident eveniet nihil sapiente perferendis, nobis hic
          odio. Optio, eius. Cupiditate voluptatem voluptatum cum molestiae
          error ipsum? Non reprehenderit quidem quaerat corrupti! Natus vero
          nihil voluptate! Totam, consectetur!
        </p>
      </Accordion>
      <Accordion title={"Сharacteristics "} idName={"characteristics"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure quas
          commodi quam quae mollitia culpa nisi quisquam totam tempora amet
          aperiam quos repellendus corrupti voluptas sed voluptates ipsa animi,
          fugiat adipisci. Illum repellendus amet asperiores maxime debitis
          tempore nam, similique labore aliquid cupiditate explicabo, doloribus
          repellat aliquam reiciendis recusandae aperiam sint placeat ipsum
          incidunt, mollitia suscipit. Officia voluptates possimus sequi saepe
          consectetur illo totam officiis excepturi temporibus iusto odit, iure
          asperiores provident eveniet nihil sapiente perferendis, nobis hic
          odio. Optio, eius. Cupiditate voluptatem voluptatum cum molestiae
          error ipsum? Non reprehenderit quidem quaerat corrupti! Natus vero
          nihil voluptate! Totam, consectetur!
        </p>
      </Accordion>
    </StyledProduct>
  );
}

Product.propTypes = {};

export default Product;
