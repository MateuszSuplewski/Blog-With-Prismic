import * as prismic from '@prismicio/client'

export const repositoryName = 'blog-by-mateusz-suplewski'

export const client = prismic.createClient(repositoryName, {
  accessToken: '',

  routes: [
    {
      type: 'post',
      path: '/articles'
    }
  ]
})
