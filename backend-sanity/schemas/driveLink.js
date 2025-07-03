export default {
  name: 'clientDrive',
  title: 'Drive Link',
  type: 'document',
  fields: [
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'driveLink',
      title: 'Google Drive URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }).required(),
    },
  ],
}
