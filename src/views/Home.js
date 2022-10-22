import React from 'react'
import Header from '../components/Header'
import PostPreview from '../components/PostPreview'
import Footer from '../components/Footer'
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import StyledLink from '../components/Link'
import Informer from '../components/Informer'

export const Home = () => {
  const [posts, { state }] = useAllPrismicDocumentsByType('post', {
    fetchLinks: ['category.category_name']
  })

  return (
    <div>
      <Header
        title={'Cosmoneus - Blog'}
        description={'Blog made with passion to everything that surrounds us. Find life articles from various fields like.: Technologies, News, Travel ect.!'}
        avatar={'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
      />
      {state === 'idle'
        ? (
          <Informer>
            <p>Server is preparing article for you</p>
          </Informer>
          )
        : state === 'loading'
          ? (
            <Informer>
              <p>Loading article ...</p>
            </Informer>
            )
          : state === 'failed'
            ? (
              <Informer>
                <p>Error occurred!</p>
              </Informer>
              )
            : (
                posts
                  .slice(0, 2)
                  .map(({ uid, data, url }) => (
                    <PostPreview
                      key={uid}
                      url={`${url}/${uid}`}
                      title={prismicH.asText(data.title)}
                      introduction={prismicH.asText(data.introduction)}
                    />
                  ))
              )}
      <StyledLink
        linkTo={'/pages/1'}
        style={{ width: '100%', margin: '0 auto', backgroundColor: '#93B7BE' }}
      >
        BROWSE POSTS
      </StyledLink>
      <Footer
        copyright={'Blog powered by: Prismic, made by Mateusz Suplewski'}
      />
    </div>
  )
}

export default Home
