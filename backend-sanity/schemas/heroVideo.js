// /schemas/heroVideo.js

export default {
  name: 'heroVideo',
  title: 'Hero YouTube Video',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Video Title',
      type: 'string',
    },
    {
      name: 'videoId',
      title: 'YouTube Video ID',
      type: 'string',
      description: "Example: For https://youtu.be/**abc123XYZ**, paste only 'abc123XYZ'",
    },
  ],
}
