/* Product interface is used in both product list elements
   and product display. */
export interface Product {
	id: string,
	prize: number,
	img: string,
	description: string,
}