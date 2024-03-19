import PropTypes from "prop-types";
import { StyledProduct } from "./StyledProduct.styled";
import Accordion from '../components/Accordion/Accordion';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import PageTitle from '../components/PageTitle/PageTitle';

function Product(props) {

  return (
    <StyledProduct>
      <Breadcrumbs title={'KEF Q150 Bookshelf Speaker'}/>
      <PageTitle title={'Product'}/>
      <Accordion title={'Accessories for bookshelf speaker:'}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure quas commodi quam quae mollitia culpa nisi quisquam totam tempora amet aperiam quos repellendus corrupti voluptas sed voluptates ipsa animi, fugiat adipisci. Illum repellendus amet asperiores maxime debitis tempore nam, similique labore aliquid cupiditate explicabo, doloribus repellat aliquam reiciendis recusandae aperiam sint placeat ipsum incidunt, mollitia suscipit. Officia voluptates possimus sequi saepe consectetur illo totam officiis excepturi temporibus iusto odit, iure asperiores provident eveniet nihil sapiente perferendis, nobis hic odio. Optio, eius. Cupiditate voluptatem voluptatum cum molestiae error ipsum? Non reprehenderit quidem quaerat corrupti! Natus vero nihil voluptate! Totam, consectetur!</p>
      </Accordion>
      <Accordion title={'Description'}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure quas commodi quam quae mollitia culpa nisi quisquam totam tempora amet aperiam quos repellendus corrupti voluptas sed voluptates ipsa animi, fugiat adipisci. Illum repellendus amet asperiores maxime debitis tempore nam, similique labore aliquid cupiditate explicabo, doloribus repellat aliquam reiciendis recusandae aperiam sint placeat ipsum incidunt, mollitia suscipit. Officia voluptates possimus sequi saepe consectetur illo totam officiis excepturi temporibus iusto odit, iure asperiores provident eveniet nihil sapiente perferendis, nobis hic odio. Optio, eius. Cupiditate voluptatem voluptatum cum molestiae error ipsum? Non reprehenderit quidem quaerat corrupti! Natus vero nihil voluptate! Totam, consectetur!</p>
      </Accordion>
      <Accordion title={'Сharacteristics '}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure quas commodi quam quae mollitia culpa nisi quisquam totam tempora amet aperiam quos repellendus corrupti voluptas sed voluptates ipsa animi, fugiat adipisci. Illum repellendus amet asperiores maxime debitis tempore nam, similique labore aliquid cupiditate explicabo, doloribus repellat aliquam reiciendis recusandae aperiam sint placeat ipsum incidunt, mollitia suscipit. Officia voluptates possimus sequi saepe consectetur illo totam officiis excepturi temporibus iusto odit, iure asperiores provident eveniet nihil sapiente perferendis, nobis hic odio. Optio, eius. Cupiditate voluptatem voluptatum cum molestiae error ipsum? Non reprehenderit quidem quaerat corrupti! Natus vero nihil voluptate! Totam, consectetur!</p>
      </Accordion>
    </StyledProduct>
  );
}

Product.propTypes = {};

export default Product;
