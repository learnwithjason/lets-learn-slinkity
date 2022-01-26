import React from 'react';

export const frontMatter = {
  title: '11tees',
  layout: 'layout',
  // hydrate: {
  //   mode: 'eager',
  //   props({ tshirts }) {
  //     return { tshirts };
  //   }
  // }
};

export default function StoreFront({ tshirts }) {
  return (
    <section>
      {tshirts.map((tshirt) => (
        <div key={tshirt.slug}>
          <h2>
            <a href={`/${tshirt.slug}/`}>{tshirt.name}</a>
          </h2>
          {tshirt.images.map((img) => (
            <img src={img} alt={tshirt.name} />
          ))}
        </div>
      ))}
    </section>
  );
}
