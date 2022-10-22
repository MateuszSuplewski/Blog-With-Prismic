const sortByDate = (posts, year, month) =>
  posts.filter((post) => {
    const publishDate = post.first_publication_date
      .split('-')
      .slice(0, 2)
      .join('/')
    const filterDate = `${year}/${month}`
    return filterDate === publishDate
  })

const sortByCategory = (posts, category) => {
  return posts.filter((post) => {
    return post.data.categories.find(
      ({ relatedcategory }) =>
        relatedcategory.data.category_name.toLowerCase() === category
    )
  })
}

const sortPosts = (posts, category, year, month) => {
  let filteredData = posts
  if (category) filteredData = sortByCategory(filteredData, category)
  if (year && month) filteredData = sortByDate(filteredData, year, month)
  return filteredData
}

export { sortByDate, sortByCategory, sortPosts }
