import React from 'react'
import Header from '../components/Header'
import PostPreview from '../components/PostPreview'
import Footer from '../components/Footer'
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import Pagination from '../components/Pagination/Pagination'
import { useParams } from 'react-router-dom'
import PostsFilterForm from '../components/PostsFilterForm'
import Informer from '../components/Informer'
import { sortPosts } from '../helper'

export const FilteredPosts = () => {
  const [posts, { state }] = useAllPrismicDocumentsByType('post', {
    fetchLinks: ['category.category_name']
  })
  const { category, year, month } = useParams()
  const filteredPosts = posts && sortPosts(posts, category, year, month)

  return (
    <div>
      <Header
        title={'Cosmoneus - Blog'}
        description={'Blog made with passion to everything that surrounds us. Find life articles from various fields like.: Technologies, News, Travel ect.!'}
        avatar={'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}
      />
      <PostsFilterForm />
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
              <Pagination
                limit={6}
                path={'/pages'}
              >
                {filteredPosts.map(({ uid, url, data }) => {
                  return (
                    <PostPreview
                      key={uid}
                      url={`${url}/${uid}`}
                      title={prismicH.asText(data.title)}
                      introduction={prismicH.asText(data.introduction)}
                    />
                  )
                })}
              </Pagination>
              )}
      <Footer
        copyright={'Blog powered with Prismic || Made by Mateusz Suplewski'}
      />
    </div>
  )
}

export default FilteredPosts
