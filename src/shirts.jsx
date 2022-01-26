import React from 'react';
import AddToCart from './_includes/add-to-cart';

export const frontMatter = {
  layout: 'layout',
  pagination: {
    data: 'tshirts',
    size: 1,
    alias: 'tshirt',
  },
  permalink: ({ tshirt }) => `/${tshirt.slug}/`,
  eleventyComputed: {
    title: ({ tshirt }) => tshirt.name,
  },
  hydrate: {
    mode: 'eager',
    props: ({ tshirt }) => ({ tshirt }),
  },
};

export default function ShirtView({ tshirt }) {
  return (
    <section>
      {tshirt.images.map((img) => (
        <img src={img} alt={tshirt.name} />
      ))}

      <p>
        <AddToCart />
      </p>
    </section>
  );
}
