export default {
  name: 'video',
  title: 'YouTube Video',
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
      description: "Only the ID. For https://youtu.be/abc123, use 'abc123'",
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Short', value: 'short'},
          {title: 'Long', value: 'long'},
          {title: 'Motion Graphics', value: 'motion'},
        ],
        layout: 'radio',
      },
    },
  ],
}
