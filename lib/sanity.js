const apiUrl = 'https://mj5cd582.api.sanity.io/v1/graphql/production/default';

const customFetch = async (query, variables) => {
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const { data } = await res.json();

  return data;
};

export const getSlugs = () => customFetch(slugQuery);

export const getPostDataBySlug = (slug) =>
  customFetch(postQuery, {
    slug: {
      eq: slug,
    },
  });

export const getTopPosts = () => customFetch(topPostsQuery);

export const getAllPostsCount = async () => {
  const { allPost } = await customFetch(allPostsCountQuery);

  return allPost.length;
};

export const perPageLimit = 4;

export const getPostsByLimitAndOffset = (variables) =>
  customFetch(postsQuerybyLimitAndOffset, variables);

const allPostsCountQuery = `query {
  allPost(where: {_ : {is_draft : false}}) {
    _id
  }
}`;

const slugQuery = `query {
  allPost(where: {_ : {is_draft: false}}) {
    slug {
      current
    }
  }
}`;

const postsQuerybyLimitAndOffset = `query($limit : Int!, $offset: Int!) {
  allPost(where: {_ : {is_draft: false}}, sort: {_createdAt: DESC}, limit: $limit, offset: $offset) {
    _id
    title
    categories {
      title
    }
    bodyRaw
    slug {
      current
    }
    mainImage {
      asset {
        originalFilename
        url
      }
    }
  }
}`;

const topPostsQuery = `query {
  allPost(where: {_ : {is_draft: false}}, sort: { publishedAt: DESC}, limit: 9) {
    _id
    title
    categories {
      title
    }
    bodyRaw
    slug {
      current
    }
    mainImage {
      asset {
        originalFilename
        url
      }
    }
  }
}`;

const postQuery = `query($slug: StringFilter!) {
  allPost(where: { _: { is_draft: false },  slug: { current : $slug }}, limit: 1) {
    _id
    title
    publishedAt
    body: bodyRaw
    mainImage {
      asset {
        originalFilename
        url
      }
    }
    categories {
      title
    }
    slug {
      current
    }
  }
}`;
