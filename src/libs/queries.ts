export const TESTIMONIALS_QUERY = `*[_type == "testimonial"]{
  _id,
  name,
  message,
  "avatar": avatar.asset->url
}`;

export const FAQ_QUERY = `*[_type == "faq"] | order(_createdAt asc){
  _id,
  question,
  answer
}`;
