import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { placeholderProduct, placeholderProductDetails } from "@/lib/placeholder-data";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { StickyBuyBar } from "@/components/product/StickyBuyBar";
import { FAQAccordion } from "@/components/home/FAQAccordion";

// 1. Next.js ko batayein ke yeh page static hai (Build time par generate hoga)
export async function generateStaticParams() {
  return [{ slug: placeholderProduct.slug }];
}

export const metadata: Metadata = {
  title: `${placeholderProduct.name} — Prifya`,
  description: placeholderProduct.subline,
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug !== placeholderProduct.slug) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: placeholderProduct.name,
    image: `https://prifya.com/placeholder-product.webp`,
    description: placeholderProduct.subline,
    brand: { "@type": "Brand", name: "Prifya" },
    offers: {
      "@type": "Offer",
      url: `https://prifya.com/product/${placeholderProduct.slug}`,
      priceCurrency: "PKR",
      price: placeholderProduct.price,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-brand-bg pb-24 pt-8 md:pt-12 lg:pb-32">
        <div className="container-prifya">
          
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <ProductGallery />
            </div>

            <div>
              <ProductInfo />
            </div>
          </div>

          <div className="mt-20 max-w-3xl lg:mt-32">
            <h2 className="mb-6 font-serif text-2xl text-brand-green md:text-3xl">Details</h2>
            <div className="border-t border-brand-border">
              {placeholderProductDetails.accordions.map((acc, i) => (
                <FAQAccordion key={i} question={acc.title} answer={acc.content} />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 2. onAddToCart prop hata diya gaya hai */}
      <StickyBuyBar product={placeholderProduct} />
    </>
  );
}