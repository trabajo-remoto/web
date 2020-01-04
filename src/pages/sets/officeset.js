import React from "react"

import ProductList from "../../containers/product-list"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

var links = [
  'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=trabajoremoto-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B07Q2R9BQV&linkId=6004298160adbff239de0dd3edbf9839&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
  'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=trabajoremoto-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B012C10JJQ&linkId=ea58dce6708972e3fb95031140f75046&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
  'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=trabajoremoto-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B07QDV5JPT&linkId=a830ae607bd4efd00bc759f0ad9590cd&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
  'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=trabajoremoto-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B00FGRYXAK&linkId=52e4ea882367377a56940db492611055&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
  'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=trabajoremoto-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B07MKT2BNB&linkId=b0fc217b6e0245b96bbf241c540de3bd&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
  'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=trabajoremoto-21&m=amazon&o=30&p=8&l=as1&IS2=1&asins=B00WRDS8H0&linkId=c06178dca983e00cb1ac7fe3a6e895e1&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
  '',
]


const OfficePage = () => (
  <Layout>
  <SEO title="Set para trabajar desde casa" />
  <h1>Set para trabajar desde casa</h1>
  <p>Escritorio, mesa, silla y componentes necesarios para trabajar desde casa. Lo más básico y barato que se puede encontrar</p>

  <ProductList links={links}></ProductList>

  </Layout>
)

export default OfficePage