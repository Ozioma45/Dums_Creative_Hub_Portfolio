export const TESTIMONIALS_QUERY = `*[_type == "testimonial"]{
  _id,
  name,
  message,
  "avatar": avatar.asset->url
}`;
