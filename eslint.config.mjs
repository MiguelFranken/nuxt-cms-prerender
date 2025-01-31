import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  gitignore: {
    files: [
      '.gitignore',
      'packages/cms/.gitignore',
      'packages/webapp/.gitignore',
    ],
  },
})
