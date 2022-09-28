import { Form, useRouteLoaderData } from "react-router-dom";
import { isEmpty } from "src/utils";
import { PAGE_STRUCTURE, PRODUCT_ATTRIBUTES } from "src/utils/constants";
import { getProductById } from "src/utils/productManagement";

import { addProductToCart } from "src/utils/cartManagement";
import Selector from "src/components/Selector";

/* istanbul ignore next */
export const productLoader = async ({ params }) => {
  return getProductById(params.productId);
};

/* istanbul ignore next */
export const productAction = async ({ request }) => {
  const formData = await request.formData();
  const colorCode = formData.get(PRODUCT_ATTRIBUTES.colorCode);
  const storageCode = formData.get(PRODUCT_ATTRIBUTES.storageCode);
  const id = formData.get(PRODUCT_ATTRIBUTES.id);

  const res = await addProductToCart({ colorCode, storageCode, id });
  if (res.error) throw res;
  return { colorCode, storageCode, id };
};

/* istanbul ignore next */
export const productHandle = {
  crumb: (data) => ({ content: `${data.brand}, ${data.model}` }),
};

const Product = () => {
  const productInfo = useRouteLoaderData(PAGE_STRUCTURE.product.clientPageId);

  return (
    <div
      data-testid="product-page-component"
      className="container mx-auto grid lg:grid-cols-2 py-8 px-8"
    >
      <div>
        <img
          className="mx-auto object-contain"
          src={productInfo.imgUrl}
          alt={`${productInfo.brand}, ${productInfo.model}`}
          height={200}
          width={150}
        />
      </div>
      <div className="grid gap-y-4">
        <h2>General Description</h2>
        <ul className="product-information grid">
          <li>
            <h3>Brand:</h3> <span>{productInfo.brand}</span>
          </li>
          <li>
            <h3>Model:</h3> <span>{productInfo.model}</span>
          </li>
          <li>
            <h3>Price:</h3>
            <span>
              {isEmpty(productInfo.price) ? "-" : `${productInfo.price}€`}
            </span>
          </li>
          <li>
            <h3>CPU:</h3> <span>{productInfo.cpu}</span>
          </li>
          <li>
            <h3>RAM:</h3> <span>{productInfo.ram}</span>
          </li>
          <li>
            <h3>OS:</h3> <span>{productInfo.os}</span>
          </li>
          <li>
            <h3>Display Res:</h3> <span>{productInfo.displayResolution}</span>
          </li>
          <li>
            <h3>Battery:</h3> <span>{productInfo.battery}</span>
          </li>
          <li>
            <h3>Cameras:</h3>
            <div className="grid px-2">
              {productInfo?.primaryCamera && (
                <span>Primary: {`${productInfo?.primaryCamera}`}</span>
              )}
              {productInfo?.secondaryCmera && (
                <span>Secondary: {`${productInfo?.secondaryCmera}`}</span>
              )}
            </div>
          </li>
          <li>
            <h3>Dimentions:</h3> <span>{productInfo.dimentions}</span>
          </li>
          <li>
            <h3>Weight:</h3> <span>{productInfo.weight} grams</span>
          </li>
        </ul>

        <Form
          className="grid gap-y-4"
          method="post"
          action={`/${productInfo.id}`}
        >
          <h2>Make your selections:</h2>
          <input
            type="text"
            name={PRODUCT_ATTRIBUTES.id}
            defaultValue={productInfo.id}
            hidden
          />
          <Selector
            name={PRODUCT_ATTRIBUTES.colorCode}
            title="Select a color:"
            options={productInfo.options.colors}
          />
          <Selector
            name={PRODUCT_ATTRIBUTES.storageCode}
            title="Select a storage:"
            options={productInfo.options.storages}
          />
          <button
            type="submit"
            className="rounded-full px-4 bg-gradient-to-r from-indigo-900 to-slate-900 text-white w-fit py-2"
          >
            Add to cart
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Product;
