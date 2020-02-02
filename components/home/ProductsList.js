
import Link from "next/link";
import AddToCartButton from "../cart/AddToCartButton";

const ProductsList = ({ products }) => {

	return (
		<div className="i-wrapper i-wrapper-padding w-100">
			<h2 className="text-center mb-5">Products</h2>
			<div className="row">
			<div className="categories col-sm-3">
				<ul>
					<li>
						<a className="i-menu-link">
							Collections
						</a>
					</li>
					<li>
						<a className="i-menu-link">
							Categories
						</a>
					</li>
				</ul>
			</div>
			{ products.length ? (
					<div className="products-wrapper  col-sm-9">
						<div className="row">
						{
							products.map( item => (
								<div className="col-sm-4" key={item.id}>
								<div className="product-container mb-5" >
									<Link as={`/product/${item.slug}-${item.productId}`} href={`/product?slug=${item.slug}-${item.productId}`}>
										<a>
											<span className="product-link">
												{item.image && <img className="product-image" src={item.image.sourceUrl} srcSet={item.image.srcSet} alt={ item.name }/>}
												<h5 className="product-name">{item.name}</h5>
												<p className="product-price">{item.price}</p>
											</span>
										</a>
									</Link>
									<AddToCartButton product={ item } />
								</div>
								</div>
							) )
						}
				</div>
					</div>
			) : '' }
			</div>
		</div>
	);
};



export default ProductsList;
