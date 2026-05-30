import type { Product } from "../content";

/**
 * Tag-cloud of products we admire. Each name is a chip; if a URL is
 * provided the chip becomes a clickable link to the product, otherwise
 * it renders as a static pill. Wraps fluidly so 30+ items don't blow
 * the column.
 */
export default function ProductCloud({ products }: { products: Product[] }) {
  return (
    <div className="product-cloud">
      {products.map((p) =>
        p.url ? (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="plain product-chip"
          >
            {p.name}
          </a>
        ) : (
          <span key={p.name} className="product-chip product-chip--static">
            {p.name}
          </span>
        ),
      )}
    </div>
  );
}
