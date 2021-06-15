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

const slugQuery = `query {
  allPost(where: {_ : {is_draft: false}}) {
    slug {
      current
    }
  }
}`;

const topPostsQuery = `query {
  allPost(where: {_ : {is_draft: false}}, sort: {_createdAt: DESC}, limit: 6) {
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
        url
      }
    }
  }
}`;

const postQuery = `query($slug: StringFilter!) {
  allPost(where: { _: { is_draft: false },  slug: { current : $slug }}, limit: 1) {
    _id
    title
    body: bodyRaw
    mainImage {
      asset {
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
