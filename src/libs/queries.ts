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

export const ABOUT_ME_QUERY = `*[_type == "aboutMe"][0]{
  _id,
  name,
  title,
  description,
  buttonText,
  buttonLink,
  "imageUrl": image.asset->url
}`;
